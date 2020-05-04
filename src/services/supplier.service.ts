import {Request,Response} from "express";
import {getConnection} from "typeorm";
import {Supplier,ISupplier,IResult} from "../entity/supplier.entity";
import {ViewSuppliersbyProducts} from "../entity/supplierbynproducts.entty";

export class SupplierService{
    public async getAll(req: Request, res:Response){
        const suppliers = await getConnection().getRepository(Supplier).find();
        res.status(200).json(suppliers);
    }
    public async getOne(req:Request,res:Response){
        const supplier:Supplier[] = await getConnection().getRepository(Supplier).find({where:[{SupplierID:req.params.id}]});
        res.status(200).json(supplier[0]);
    }
    public async getOneSummary(req:Request,res:Response){
        const supplier:ViewSuppliersbyProducts[] = await getConnection().getRepository(ViewSuppliersbyProducts).find({where:[{SupplierID:req.params.id}]});
        res.status(200).json(supplier[0]);
    }
    public async updateone(req:Request,res:Response){
        try{
            await getConnection().createQueryBuilder().update(Supplier)
            .set({
                SupplierName: req.body.SupplierName,
                Address:req.body.Address,
                City: req.body.City,
                PostalCode: req.body.PostalCode,
                Country: req.body.Country,
                Phone: req.body.Phone
            })
            .where("SupplierID=:id",{id: req.params.id})
            .execute();
            res.status(200).json({
                update: true
            });
        }catch(Error){res.status(401).json({
            update: false,
            message: Error.message
        })}
    }
    public async CreateOne(req:Request,res:Response){
        const s: ISupplier = req.body;
        const result: IResult[]= await getConnection().query(`
        EXEC example.SP_CREATE_SUPPLIER 
            @SupplierId = ${s.SupplierID},
            @SupplierName = '${s.SupplierName}',
            @Address =  '${s.Address}',
            @City =  '${s.City}',
            @PostalCode =  '${s.PostalCode}',
            @Country =  '${s.Country}',
            @Phone =  '${s.Phone}',
            @contactName =  '${s.ContactName}'
        `);
        res.status(201).json(result[0]);
    }
    public async DeleteOne(req:Request,res:Response){
        const result: IResult[]= await getConnection().query(`
        EXEC example.SP_DELETE_SUPPLIER 
            @SupplierId = ${req.params.id}
        `);
        res.status(201).json(result[0]);
    }
}