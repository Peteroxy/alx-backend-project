export interface Deposit {
  id?: string;
  sourceAccountNumber: string;
  senderName: string;
  recipientAccountNumber: string;
  recipientName: string;
  type: 'deposit';
  amount: number;
  currency: 'NGN' | 'USD' | 'EUR';
  purposeOfTransaction: string;
  password: string;
}
