import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import IInfo from './interfaces/IInfo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/info')
  getInfo(): IInfo {
    return this.appService.getInfo();
  }
}
