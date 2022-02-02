import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import environment from './config/environment';
import { GithubController } from './features/github/github.controller';

@Module({
  imports: [ConfigModule.forRoot({ load: [environment] })],
  controllers: [GithubController],
})
export class AppModule {}
