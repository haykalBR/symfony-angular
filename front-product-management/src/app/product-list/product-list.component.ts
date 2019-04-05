import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductModule } from '../product/ProductModule';
import { Route } from '@angular/router';
import { ProductService } from '../Service/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor( private http: HttpClient,private productservice: ProductService ) { }
  products:ProductModule[];

 ngOnInit() {
  this.productservice.getProducts()
    .subscribe( data => {
      this.products = data;
      console.log(data);
    });
  }

}
