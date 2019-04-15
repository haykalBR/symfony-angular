import { Component,OnInit, ɵConsole } from '@angular/core';
import { Product } from '../Models/product';
import { ProductService } from '../Service/product.service';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor( private http: HttpClient,
               private productservice: ProductService,
               private router: Router,
               private toastr: ToastrService
               ) { }
  products:Product[];
 ngOnInit() {
  this.productservice.getProducts()
    .subscribe( data => {
      console.log(data);
      this.products = data;
    });
  }
  //Add new Product
    addProduct(){
      this.router.navigate(['product/new']);
    }
  //Edit Product  
    editProduct(product :Product){
      this.router.navigate(['product/edit/',product.id]);
    }
  //Remove Prodcut
    removeProdcut(product: Product):void{
      this.productservice.removeProduct(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
        this.toastr.warning("Deleted Successfully", "Product "+product.name);

    });
    }
  //ShowProdcut  
  singleproduct(product :Product):void{
      this.router.navigate(['product/single/',product.id]);

    }
}
