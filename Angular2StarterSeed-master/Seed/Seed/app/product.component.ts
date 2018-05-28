import {Component} from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector:`product`,
    template:`<h1>Products</h1>
    <input type="button" value="Get Random Products" (click)="GetProduct()">
    <input type="text" [(ngModel)]="newProduct">
    <input type="button" value="Add Products" (click)="AddProduct()">
    {{randomProduct}}`,
    providers:[ProductService]
})

export class ProductComponent{

    constructor(public serviceObj:ProductService)
    {
        console.log(serviceObj.getAllProducts());
    }
    randomProduct:string="";
    newProduct:string=""; //If we not providing member variable then Angular will create at runtime
    GetProduct()
    {
        this.randomProduct = this.serviceObj.getRandomProduct();
    }
    AddProduct()
    {
       this.serviceObj.addProduct(this.newProduct);       
    }
}