import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './product-list/new-product/new-product.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'product/list', pathMatch: 'full'},
  { path: 'product/list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'product/new', component: NewProductComponent, canActivate: [AuthGuard]},
  { path: 'product/edit/:id', component: EditProductComponent, canActivate: [AuthGuard] },
  { path: 'product/single/:id', component: SingleProductComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
