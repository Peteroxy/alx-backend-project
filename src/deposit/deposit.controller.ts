import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { DepositService } from './deposit.service';
import { Deposit } from './interfaces/deposit.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Deposit')
@Controller('deposit')
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @Get()
  findAll(): Promise<Deposit[]> {
    return this.depositService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Deposit> {
    return this.depositService.findOne(id);
  }

  @Post()
  deposit(@Body() createDepositDto: CreateDepositDto): Promise<Deposit> {
    return this.depositService.createDeposit(createDepositDto);
  }
}
