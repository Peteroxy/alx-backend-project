export class TransactionDto {
  readonly id?: string;
  readonly transactionDate: string;
  readonly senderName: string;
  readonly sourceAccountNumber: string;
  readonly recipientAccountNumber: string;
  readonly recipientName: string;
  readonly type: 'deposit' | 'withdraw';
  readonly amount: number;
  readonly currency: 'NGN' | 'USD' | 'EUR';
  readonly purposeOfTransaction: string;
  readonly reference: string; // Authorization code or reference
}
