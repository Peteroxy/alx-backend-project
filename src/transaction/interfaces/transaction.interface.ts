export class Transaction {
  id?: string;
  transactionDate: string;
  senderName: string;
  sourceAccountNumber: string;
  recipientAccountNumber: string;
  recipientName: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  currency: 'NGN' | 'USD' | 'EUR';
  purposeOfTransaction: string;
  reference: string;
}
