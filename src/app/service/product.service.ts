import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable<any> {
    return this.http.post('http://localhost:8082/product/add', product);
  }

  getProductDetails(id: any) : Observable<any> {
    return this.http.get('http://localhost:8082/product/one/'+id);
  }

  editProduct(id:any,product: any){
    return this.http.post('http://localhost:8082/product/update/'+id, product);
  }

  getAllProducts(page: number, size: number) : Observable<any> {
    return this.http.get('http://localhost:8082/product/all?page='+page+'&size='+size);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete('http://localhost:8082/product/delete/'+id);
  }

}
