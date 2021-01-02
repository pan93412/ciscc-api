import VERSION from './utils/getVersion';
import { Injectable } from '@nestjs/common';
import IInfo from './interfaces/IInfo';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getInfo(): IInfo {
    return {
      version: VERSION,
    };
  }
}
