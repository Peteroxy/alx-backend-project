import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    fullname: String,
    username: String,
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, 'Please add a number'],
      unique: true,
    },
    accountBalance: {
      type: Number,
      default: 0,
    },
    password: String,
    address: String,
    city: String,
    state: String,
    postalCode: Number,
  },
  {
    timestamps: true,
  },
);
