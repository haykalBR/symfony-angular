import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  EditForm: FormGroup;
  submitted = false;
  d ={};
  constructor(private http:HttpClient,
    private router:Router,
    private formBuilder: FormBuilder,
    private productservice:ProductService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.productservice.singleProduct(+id)
    .subscribe( data => {
       this.d=data.id;
       delete data.created_at
       delete data.updated_at
      this.EditForm.setValue(data);
    
    });
    this.EditForm=this.formBuilder.group({
      id: [],
      sku: ['', [Validators.required,Validators.minLength(6)]],
      name: ['', [Validators.required,Validators.minLength(5)]],
      price: ['', Validators.required],
      amount: ['', [Validators.required]]
    });
    
  }
 
    get f() { return this.EditForm.controls; }
    OnEdit(){
      this.submitted = true;
      if (this.EditForm.valid) {
       this.productservice.editProduct(this.EditForm.value)
        .subscribe( data => {
            this.router.navigate(['product/list']);
        });
      }else{
          return;
      }
    }
}
