/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    name: String,
    email: String,
    adress: String,
    start_date: String,
    fiscalyear_endDate: String,
    status: String
    

})
