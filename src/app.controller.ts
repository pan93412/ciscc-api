import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import IInfo from './structures/IInfo';
import ISentRequest from './structures/ISentRequest';
import ISentResponse from './structures/ISentResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): IInfo {
    return this.appService.getInfo();
  }

  @Post('/send')
  async sendMessage(@Body() message: ISentRequest): Promise<ISentResponse> {
    const { message: msg } = message;

    const resp = await this.appService.sendMessage(msg);
    return {
      success: !!resp,
      data: {
        message: resp,
      },
    };
  }
}
