import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { ProductModule } from '../product/ProductModule';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  baseUrl: string = 'http://127.0.0.1:8000/api/';
  // Http Options
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} 

constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get<[ProductModule]>(this.baseUrl+"allProdcuts");
}


}
