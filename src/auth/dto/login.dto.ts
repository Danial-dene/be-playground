import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Im a description' })
  username: string;

  @ApiPropertyOptional({ description: 'Im an optional' })
  password: string;
}
