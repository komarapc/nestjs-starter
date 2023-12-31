import { Injectable } from '@nestjs/common';
import { version } from '../package.json';
@Injectable()
export class AppService {
  async getVersion() {
    return { data: { api_version: version } };
  }
}
