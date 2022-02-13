/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]) ,
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
  })
  
  ],
  
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}

