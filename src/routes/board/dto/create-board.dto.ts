import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @ApiProperty({
    description: '작성자 아이디',
    required: true,
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: '내용',
    required: true,
    example: '안녕하세요',
  })
  @IsNotEmpty()
  contents: string;
}