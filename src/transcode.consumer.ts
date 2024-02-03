import { Logger } from '@nestjs/common';
import { Process, Processor } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Job } from 'bull';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);
  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(JSON.stringify(job));
    this.logger.log(`Transcoding id : ${job.id}`);
    this.logger.log(`data : ${job.data}`);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 8000));
    this.logger.log(`transcoding complete : ${job.id}`);
  }
}
