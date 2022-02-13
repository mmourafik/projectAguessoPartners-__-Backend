/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './interfaces/companies.interfaces';
import { CreateCompanyDTO } from './dto/companies.dto';

@Injectable()
export class CompanyService {
    constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) { }
    // fetch all companies
    async getAllCompany(): Promise<Company[]> {
        const companies = await this.companyModel.find().exec();
        return companies;
    }
    // Get a single company
    async getCompany(companyID): Promise<Company> {
        const company = await this.companyModel.findById(companyID).exec();
        return company;
    }
    // post a single company
    async addCompany(createCompanyDTO: CreateCompanyDTO): Promise<Company> {
        const newCompany = await new this.companyModel(createCompanyDTO);
        return newCompany.save();
    }
    // Edit company details
    async updateCompany(companyID, createCompanyDTO: CreateCompanyDTO): Promise<Company> {
        const updatedCompany = await this.companyModel
            .findByIdAndUpdate(companyID, createCompanyDTO, { new: true });
        return updatedCompany;
    }
    // Delete a company
    async deleteCompany(companyID): Promise<any> {
        const deletedCompany = await this.companyModel.findByIdAndRemove(companyID);
        return deletedCompany;
    }
}