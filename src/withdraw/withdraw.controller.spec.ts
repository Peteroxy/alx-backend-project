import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawController } from './withdraw.controller';
import { WithdrawService } from './withdraw.service';
import { getModelToken } from '@nestjs/mongoose'; // Import getModelToken

describe('WithdrawController', () => {
  let controller: WithdrawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithdrawController],
      providers: [
        WithdrawService,
        {
          provide: getModelToken('Withdraw'),
          useValue: {},
        },
        {
          provide: getModelToken('User'),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WithdrawController>(WithdrawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
