import { Component,OnInit, ɵConsole } from '@angular/core';
import { ProductModule } from '../product/product.module';
import { ProductService } from '../Service/product.service';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor( private http: HttpClient,private productservice: ProductService, private router: Router ) { }
  products:ProductModule[];
 ngOnInit() {
  this.productservice.getProducts()
    .subscribe( data => {
      this.products = data;
    });
  }
  //Add new Product
    addProduct(){
      this.router.navigate(['product/new']);
    }
  //Edit Product  
    editProduct(product :ProductModule){
      this.router.navigate(['product/edit/',product.id]);
    }
  //Remove Prodcut
    removeProdcut(product: ProductModule):void{
      this.productservice.removeProduct(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
    });
    }
  //ShowProdcut  
  singleproduct(product :ProductModule):void{
      this.router.navigate(['product/single/',product.id]);

    }
}
