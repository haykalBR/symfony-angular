import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ProductModule } from '../product/ProductModule';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  baseUrl: string = 'http://127.0.0.1:8000/api/';
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
}
singleProduct(id :number){
  return this.http.get<[ProductModule]>(this.baseUrl+"product/"+id)
}
}
