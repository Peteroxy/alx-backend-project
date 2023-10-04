import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';
import { DepositSchema } from './schemas/deposit.schema';
import { UserSchema } from 'src/users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Deposit', schema: DepositSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [DepositController],
  providers: [DepositService],
})
export class DepositModule {}
