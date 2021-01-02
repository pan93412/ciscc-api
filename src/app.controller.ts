import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import IInfo from './structures/IInfo';
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

  @Get('/send')
  async sendMessage(): Promise<ISentResponse> {
    const message = 'meow';
    await this.appService.sendMessage(message);
    return {
      success: true,
      data: {
        message,
      },
    };
  }
}
