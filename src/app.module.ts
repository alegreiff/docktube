import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { MongoModule } from './database/mongo.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { ConfigModule } from '@nestjs/config'


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    ApiModule, MongoModule, AuthModule],
  providers: [],
  controllers: [ AuthController]
})
export class AppModule {}
