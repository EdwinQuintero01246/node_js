import {Application} from "express";
import {SupplierService} from  "../services/supplier.service";

export class SupplierController{
    supplier_service: SupplierService;
    constructor(private app: Application){
        this.supplier_service = new SupplierService();
        this.routes();
    }
    private routes(){

        this.app.route("/Supplier/:id/summary")
        .get(this.supplier_service.getOneSummary);
        this.app.route("/Supplier").post(this.supplier_service.CreateOne);
        this.app.route("/Supplier/:id")
        .get(this.supplier_service.getOne)
        .put(this.supplier_service.updateone)
        .delete(this.supplier_service.DeleteOne);
        this.app.route("/Suppliers").get(this.supplier_service.getAll);
    }
}