import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DepositModule } from './deposit/deposit.module';
import { WithdrawModule } from './withdraw/withdraw.module';
import { TransactionModule } from './transaction/transaction.module';
import config from './config/key';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(config.mongoURI),
    DepositModule,
    WithdrawModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
