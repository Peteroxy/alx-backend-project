export class WithdrawDto {
  readonly sourceAccountNumber: string;
  readonly amount: number;
  readonly currency: 'NGN' | 'USD' | 'EUR';
  readonly purposeOfTransaction: string;
  readonly type: 'withdraw';
  readonly password: string;
}
