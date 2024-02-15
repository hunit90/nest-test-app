import { IsOptional, MaxLength, MinLength } from 'class-validator';
import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsOptional()
  name?: string;

  @IsOptional()
  content?: string;
}

