import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WithdrawService } from './withdraw.service';
import { WithdrawDto } from './dto/withdraw.dto';
import { Withdraw } from './interfaces/withdraw.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Withdraw')
@Controller('withdraw')
export class WithdrawController {
  constructor(private readonly withdrawService: WithdrawService) {}

  @Get()
  findAll(): Promise<Withdraw[]> {
    return this.withdrawService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Withdraw> {
    return this.withdrawService.findOne(id);
  }

  @Post()
  withdraw(@Body() withdrawDto: WithdrawDto): Promise<Withdraw> {
    return this.withdrawService.createWithdraw(withdrawDto);
  }
}
