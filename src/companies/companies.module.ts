/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CompanyController } from './companies.controller';
import { CompanyService } from './companies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schemas/companies.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }])
  ],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompaniesModule { }