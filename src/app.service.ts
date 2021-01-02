import Bot from 'ciscc-discord/lib/Bot';
import MessageBuilder from 'ciscc-discord/lib/MessageBuilder';
import { Injectable } from '@nestjs/common';
import IInfo from './structures/IInfo';
import VERSION from './utils/getVersion';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  bot: Bot;

  constructor(private configService: ConfigService) {
    const token = configService.get('DC_TOKEN');
    this.bot = new Bot();

    if (token) {
      this.bot.login(token);
    } else {
      throw new Error("You didn't specify 'DC_TOKEN' in your .env file.");
    }
  }

  getHello(): string {
    return 'Hello World!';
  }

  getInfo(): IInfo {
    return {
      version: VERSION,
    };
  }

  async sendMessage(message: string) {
    await this.bot.sendMessageObject(
      new MessageBuilder().setMessage(message).build(),
    );
    return message;
  }
}
