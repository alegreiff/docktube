import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUserSchema } from './users.model';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'users',
    schema: AuthUserSchema,
  }], 'auth'),
PassportModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}


