import {ViewEntity,ViewColumn} from "typeorm";
@ViewEntity({schema:"example",database:"ingreso_vehiculos", name:"viewSuppliersbyProducts"})
export class ViewSuppliersbyProducts{
    @ViewColumn() SupplierID: number;
    @ViewColumn() SupplierName: string;
    @ViewColumn() Products: number;
}