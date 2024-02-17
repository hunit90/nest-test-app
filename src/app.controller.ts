import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';
import { HttpExceptionFilter } from './exceptions/http.exceptions';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Ip() ip: string
  ): string {
    console.log(ip)
    // return this.appService.getHello();
    throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
  }
}
