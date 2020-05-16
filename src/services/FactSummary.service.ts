import {Request,Response} from "express";
import {getConnection} from "typeorm";
import {Supplier,ISupplier,IResult} from "../entity/supplier.entity";

export class FactSummaryS{
    public async getAll(req: Request, res:Response){
        const factummaryS: IResult[] = await getConnection().query(`
        EXEC pFacturas.SP_factummaryS
        `)
        res.status(201).json(factummaryS);
    }
}