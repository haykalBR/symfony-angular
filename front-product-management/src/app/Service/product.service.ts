import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ProductModule } from '../product/product.module';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  baseUrl =environment.baseUrl;
  // Http Options
 httpOptions = {
  headers: new HttpHeaders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ({
    'Content-Type': 'application/json'
  })
} 
constructor(private http: HttpClient) { }
products: ProductModule[] = [];
getProducts() {
  return this.http.get<[ProductModule]>(this.baseUrl+"allProdcuts");
}
removeProduct(id :number){
  return this.http.get<[ProductModule]>(this.baseUrl+"remove/"+id);
  this.getProducts();
}
singleProduct(id :number){
  return this.http.get<[ProductModule]>(this.baseUrl+"product/"+id)
}
addProduct(prodcut :ProductModule){
    return this.http.post(this.baseUrl+"new",JSON.stringify(prodcut),this.httpOptions)
}
editProduct(prodcut :ProductModule){
  return this.http.put(this.baseUrl+"edit",JSON.stringify(prodcut),this.httpOptions)
}
}
