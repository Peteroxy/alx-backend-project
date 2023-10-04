import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Deposit } from 'src/deposit/interfaces/deposit.interface';
import { Withdraw } from 'src/withdraw/interfaces/withdraw.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('deposits/:phoneNumber')
  async getDepositTransactions(
    @Param('phoneNumber') phoneNumber: string,
  ): Promise<Deposit[]> {
    const depositTransactions =
      await this.transactionService.getDepositTransactionsByUser(phoneNumber);
    if (!depositTransactions) {
      throw new NotFoundException(
        'No deposit transactions found for this user',
      );
    }
    return depositTransactions;
  }

  @Get('withdrawals/:phoneNumber')
  async getWithdrawTransactions(
    @Param('phoneNumber') phoneNumber: string,
  ): Promise<Withdraw[]> {
    const withdrawTransactions =
      await this.transactionService.getWithdrawTransactionsByUser(phoneNumber);
    if (!withdrawTransactions) {
      throw new NotFoundException(
        'No withdrawal transactions found for this user',
      );
    }
    return withdrawTransactions;
  }
}
