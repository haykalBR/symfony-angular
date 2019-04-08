import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  ProductForm: FormGroup;
  submitted = false;
  constructor(private http:HttpClient,
              private router:Router,
              private formBuilder: FormBuilder,
              private productservice:ProductService) { }
  ngOnInit() {
    this.ProductForm=this.createForm();
  }
  createForm(): FormGroup {
    return this.formBuilder.group({
      id: [],
      sku: ['', [Validators.required,Validators.minLength(6)]],
      name: ['', [Validators.required,Validators.minLength(8)]],
      price: ['', Validators.required],
      amount: ['', [Validators.required,Validators.maxLength(2)]]
    });}
    get f() { return this.ProductForm.controls; }
    onSave(){
      this.submitted = true;
      if (this.ProductForm.valid) {
        this.productservice.addProduct(this.ProductForm.value)
        .subscribe( data => {
            this.router.navigate(['product/list']);
        });
      }else{
          return;
      }
    }
}
