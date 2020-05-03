import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"example", database:"ingreso_vehiculos", name:"Suppliers"})
export class Supplier{
    @PrimaryColumn()
    SupplierID: number;
    @Column()
    SupplierName: string;
    @Column()
    Address: string;
    @Column()
    City:string;
    @Column()
    PostalCode:string;
    @Column()
    Country:string;
    @Column()
    Phone:string;
    @Column()
    ContactName:string;
    
}
