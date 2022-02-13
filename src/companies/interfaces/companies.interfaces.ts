/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Company extends Document {
    readonly name: string;
    readonly email: string;
    readonly adress: string;
    readonly start_date: string;
    readonly fiscalyear_endDate: string;
    readonly status: string ;

}



