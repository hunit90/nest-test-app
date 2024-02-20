import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';
import { HttpExceptionFilter } from './exceptions/http.exceptions';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(@Ip() ip: string): string {
    console.log(ip);
    this.logger.log(ip);
    this.logger.debug(ip);
    this.logger.error(ip);
    this.logger.warn(ip);
    // return this.appService.getHello();
    throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }
}
