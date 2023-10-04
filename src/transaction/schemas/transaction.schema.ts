import * as mongoose from 'mongoose';

const CurrencyEnum = ['NGN', 'USD', 'EUR'];

export const TransactionSchema = new mongoose.Schema(
  {
    transactionDate: {
      type: Date,
      default: Date.now,
    },
    senderName: {
      type: String,
      required: true,
    },
    sourceAccountNumber: {
      type: Number,
      required: [true, 'Please add a number'],
      unique: true,
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
      enum: ['deposit', 'withdraw'],
      required: true,
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
    reference: String,
  },
  {
    timestamps: true,
  },
);
