import { Model } from 'mongoose';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Withdraw } from './interfaces/withdraw.interface';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class WithdrawService {
  constructor(
    @InjectModel('Withdraw') private readonly withdrawModel: Model<Withdraw>,
    @InjectModel('User') private readonly userModel: Model<User>, // Inject the User model
  ) {}

  async findAll(): Promise<Withdraw[]> {
    return await this.withdrawModel.find();
  }

  async findOne(id: string): Promise<Withdraw> {
    return await this.withdrawModel.findOne({ _id: id });
  }

  async createWithdraw(withdraw: Withdraw): Promise<Withdraw> {
    const { sourceAccountNumber, amount } = withdraw;

    // Check if the source number (phone number) exist in your user database
    const sourceUser = await this.findUserByPhoneNumber(sourceAccountNumber);

    if (!sourceUser) {
      throw new NotFoundException('Invalid source account number');
    }

    console.log(sourceUser, 'user logged');

    // Check if the source account has sufficient balance
    if (sourceUser.accountBalance < amount) {
      throw new BadRequestException('Insufficient balance');
    }

    // Check if the source is a valid user
    if (sourceUser.phoneNumber) {
      // Deduct the amount from the user's account
      sourceUser.accountBalance -= amount;
      // Update the user's account balance in the database
      await this.userModel
        .findOneAndUpdate(
          { phoneNumber: sourceAccountNumber },
          { accountBalance: sourceUser.accountBalance },
        )
        .exec();
    }

    // Fetch name from the User model
    const withdrawUserName = sourceUser.fullname;

    // Create and save the deposit record with sender and recipient names
    const newWithdraw = new this.withdrawModel({
      ...withdraw,
      withdrawUserName,
    });

    // Save the deposit record
    await newWithdraw.save();
    return newWithdraw;
  }

  private async findUserByPhoneNumber(phoneNumber: string): Promise<User> {
    return await this.userModel.findOne({ phoneNumber });
  }
}
