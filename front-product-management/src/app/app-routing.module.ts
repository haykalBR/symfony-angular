import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './product-list/new-product/new-product.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
const routes: Routes = [
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/new', component: NewProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
  { path: 'product/single/:id', component: SingleProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
