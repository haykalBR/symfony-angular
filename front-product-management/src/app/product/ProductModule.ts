import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule  {

 // Http Options
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 



}
