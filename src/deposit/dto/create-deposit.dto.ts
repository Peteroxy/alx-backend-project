export class CreateDepositDto {
  readonly sourceAccountNumber: string;
  readonly senderName: string;
  readonly recipientAccountNumber: string;
  readonly recipientName: string;
  readonly accountBalance: number;
  readonly type: 'deposit';
  readonly amount: number;
  readonly currency: 'NGN' | 'USD' | 'EUR';
  readonly purposeOfTransaction: string;
  readonly password: string;
}
