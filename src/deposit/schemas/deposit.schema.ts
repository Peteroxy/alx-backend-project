import * as mongoose from 'mongoose';

const CurrencyEnum = ['NGN', 'USD', 'EUR'];

export const DepositSchema = new mongoose.Schema(
  {
    sourceAccountNumber: {
      type: Number,
      required: [true, 'Please add a number'],
      unique: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    recipientAccountNumber: {
      type: Number,
      required: [true, 'Please add a number'],
      unique: true,
    },
    recipientName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['deposit'],
      default: 'deposit',
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: CurrencyEnum,
      required: true,
    },
    purposeOfTransaction: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
