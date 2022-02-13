/* eslint-disable prettier/prettier */
import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { CompanyService } from './companies.service';
import { CreateCompanyDTO } from './dto/companies.dto';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) { }

    // add a company
    @Post('/create')
    async addCompany(@Res() res, @Body() createCompanyDTO: CreateCompanyDTO) {
        const company = await this.companyService.addCompany(createCompanyDTO);
        return res.status(HttpStatus.OK).json({
            message: "Company has been created successfully",
            company
        })
    }

    // Retrieve companies list
    @Get('companies')
    async getAllCompany(@Res() res) {
        const companies = await this.companyService.getAllCompany();
        return res.status(HttpStatus.OK).json(companies);
    }

    // Fetch a particular company using ID
    @Get('company/:companyID')
    async getCompany(@Res() res, @Param('companyID') companyID) {
        const company = await this.companyService.getCompany(companyID);
        if (!company) throw new NotFoundException('Company does not exist!');
        return res.status(HttpStatus.OK).json(company);
    }

   // Update a company's details
   @Put('/update')
   async updateCompany(@Res() res, @Query('companyID') companyID, @Body() createCompanyDTO: CreateCompanyDTO) {
       const company = await this.companyService.updateCompany(companyID, createCompanyDTO);
       if (!company) throw new NotFoundException('Company does not exist!');
       return res.status(HttpStatus.OK).json({
           message: 'Company has been successfully updated',
           company
       });
   }

   // Delete a company
   @Delete('/delete')
   async deleteCompany(@Res() res, @Query('companyID') companyID) {
       const company = await this.companyService.deleteCompany(companyID);
       if (!company) throw new NotFoundException('Company does not exist');
       return res.status(HttpStatus.OK).json({
           message: 'Company has been deleted',
           company
       })
   }



}
