import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ProductModule } from '../product/ProductModule';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  baseUrl: string = 'http://127.0.0.1:8000/api/';
  // Http Options
/* httpOptions = {
  headers: new HttpHeader                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ({
    'Content-Type': 'application/json'
  })
 
}  */

constructor(private http: HttpClient) { }
products: ProductModule[] = [];
prodcutsSubject = new Subject<ProductModule[]>();
emitProdcuts() {
  this.prodcutsSubject.next(this.products);
}
getProducts() {
  return this.http.get<[ProductModule]>(this.baseUrl+"allProdcuts");
}

allproducts(){
    this.http
      .get<[ProductModule]>(this.baseUrl+"allProdcuts")
      .subscribe(
        (response) => {
          this.products = response;
            
          this.emitProdcuts();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );  
}


}
