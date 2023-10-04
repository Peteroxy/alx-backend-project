export interface Withdraw {
  id?: string;
  sourceAccountNumber: string;
  amount: number;
  currency: 'NGN' | 'USD' | 'EUR';
  purposeOfTransaction: string;
  type: 'withdraw';
  password: string;
}
