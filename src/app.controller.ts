import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import IInfo from './structures/IInfo';
import ISentRequest from './structures/ISentRequest';
import ISentResponse from './structures/ISentResponse';

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

  @Post('/send')
  async sendMessage(@Body() message: ISentRequest): Promise<ISentResponse> {
    const { message: msg } = message;

    await this.appService.sendMessage(msg);
    return {
      success: true,
      data: {
        message: msg,
      },
    };
  }
}
