import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @IsNumber()
  @MinLength(2)
  @MaxLength(20)
  @ApiProperty({
    description: '작성자 아이디',
    required: true,
    example: '1',
  })
  userId: number;

  @IsNotEmpty()
  @ApiProperty({
    description: '내용',
    required: true,
    example: '안녕하세요',
  })
  content: string;
}
