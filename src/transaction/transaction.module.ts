import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionSchema } from './schemas/transaction.schema';
import { UserSchema } from 'src/users/schemas/user.schema';
import { DepositSchema } from 'src/deposit/schemas/deposit.schema';
import { WithdrawSchema } from 'src/withdraw/schemas/withdraw.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Transaction', schema: TransactionSchema },
    ]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Deposit', schema: DepositSchema }]),
    MongooseModule.forFeature([{ name: 'Withdraw', schema: WithdrawSchema }]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
