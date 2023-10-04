import { Model } from 'mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from './interfaces/user.interface';
import { jwtSecret } from '../config/key';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async findByPhoneNumber(phoneNumber: number): Promise<User> {
    return await this.userModel.findOne({ phoneNumber });
  }

  // @desc   Register new user
  // @route  POST /users
  async signup(user: User): Promise<{ user: User; token: string }> {
    const {
      fullname,
      username,
      email,
      phoneNumber,
      password,
      address,
      city,
      state,
      postalCode,
    } = user;

    if (
      !fullname ||
      !username ||
      !email ||
      !phoneNumber ||
      !password ||
      !address ||
      !city ||
      !state ||
      !postalCode
    ) {
      throw new BadRequestException('Please add all fields');
    }

    // Check if email or phone number already exists
    const existingUser = await this.userModel.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (existingUser) {
      throw new ConflictException('Email or phone number already in use');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new this.userModel({
      ...user,
      password: hashedPassword,
      accountBalance: 0,
    });

    const savedUser = await newUser.save();

    // Generate a JWT token for the newly registered user
    const token = this.generateJwtToken(savedUser.id);

    return {
      user: savedUser,
      token,
    };
  }

  // @desc   Authenticate a user
  // @route  POST /users
  async login(user: User): Promise<{ user: User; token: string }> {
    try {
      const { username, email, password } = user;

      // Validate input data
      if (!username || !email || !password) {
        throw new UnauthorizedException('Invalid input data');
      }

      // Check for user by email
      const foundUser = await this.userModel.findOne({ email });

      if (foundUser && (await bcrypt.compare(password, foundUser.password))) {
        // Generate a JWT token
        const token = this.generateJwtToken(foundUser.id);
        return {
          user: foundUser,
          token,
        };
      }
      throw new UnauthorizedException('Invalid credentials');
    } catch (error) {
      throw new UnauthorizedException('Authentication failed');
    }
  }

  private generateJwtToken(id): string {
    const token = jwt.sign({ _id: id }, jwtSecret, {
      expiresIn: '1h',
    });
    return token;
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
