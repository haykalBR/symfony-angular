import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor(private http: HttpClient,
              private router:Router,
              private route:ActivatedRoute,
              private productservice:ProductService
              ) { }
  product={};
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if(!id){
      alert("Invalid action.")
      this.router.navigate(['product/list']);
    }
    this.productservice.singleProduct(+id)
    .subscribe( data => {
     this.product = data;
     console.log(data);
      });
    }

}
