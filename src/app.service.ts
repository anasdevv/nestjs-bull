import { Injectable, Inject } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async transcode() {
    return await this.transcodeQueue.add({
      fileName: './file.mp3',
    });
  }
}
