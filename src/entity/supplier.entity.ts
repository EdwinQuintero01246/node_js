import {Entity, Column, PrimaryColumn} from "typeorm";
@Entity({schema:"example", database:"ingreso_vehiculos", name:"Suppliers"})

export class Supplier{
    @PrimaryColumn() SupplierID: number;
    @Column() SupplierName: string;
    @Column() Address: string;
    @Column() City:string;
    @Column() PostalCode:string;
    @Column() Country:string;
    @Column() Phone:string;
    @Column() ContactName:string;
}
export interface ISupplier{
    SupplierID: number;
    SupplierName: string;
    Address: string;
    City:string;
    PostalCode:string;
    Country:string;
    Phone:string;
    ContactName:string;
}
export interface IResult{
    Successed: boolean;
    MSG:string;
}