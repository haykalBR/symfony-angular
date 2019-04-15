import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from '../Models/product';
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
products: Product[] = [];
getProducts() {
  return this.http.get<[Product]>(this.baseUrl+"allProdcuts");
}
removeProduct(id :number){
  return this.http.delete<[Product]>(this.baseUrl+"remove/"+id);
  this.getProducts();
}
singleProduct(id :number){
  return this.http.get<[Product]>(this.baseUrl+"product/"+id)
}
addProduct(prodcut :Product){
    return this.http.post(this.baseUrl+"new",JSON.stringify(prodcut),this.httpOptions)
}
editProduct(prodcut :Product){
  return this.http.put(this.baseUrl+"edit",JSON.stringify(prodcut),this.httpOptions)
}
}
