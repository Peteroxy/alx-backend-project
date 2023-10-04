import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'this is a fullname',
    example: 'John doe',
  })
  readonly fullname: string;
  @ApiProperty({
    description: 'this is a username',
    example: 'John123',
  })
  readonly username: string;
  @ApiProperty({
    description: 'this is an email',
    example: 'John123@gmail.com',
  })
  readonly email: string;
  @ApiProperty({
    description: 'this is a phonenumber',
    example: '12345678901',
  })
  readonly phoneNumber: number;
  @ApiProperty({
    description: 'this is account balance',
    example: '50000',
  })
  readonly accountBalance: number;
  @ApiProperty({
    description: 'this is a password',
    example: 'abc123',
  })
  readonly password: string;
  @ApiProperty({
    description: 'this is address',
    example: '12 Atlanta',
  })
  readonly address: string;
  @ApiProperty({
    description: 'this is a city',
    example: 'Atlanta',
  })
  readonly city: string;
  @ApiProperty({
    description: 'this is a state',
    example: 'Georgia',
  })
  readonly state: string;
  @ApiProperty({
    description: 'this is a postalcode',
    example: '12345',
  })
  readonly postalCode: number;
}
