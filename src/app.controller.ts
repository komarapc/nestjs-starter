import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getVersion(@Res() res: Response) {
    const apiVersion = await this.appService.getVersion();
    res.status(200).send(
      JSON.stringify({
        statusCode: 200,
        message: 'OK',
        success: true,
        ...apiVersion,
      }),
    );
  }
}
