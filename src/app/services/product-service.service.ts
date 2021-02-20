import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductDTO} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productUrl: string;

  constructor(private http: HttpClient, private baseUrl: string) {
    this.productUrl = '/api/playground';
  }

  async getProducts(): Promise<ProductDTO[]> {
    return this.http.get<ProductDTO[]>( 'https://185.203.117.142:8443' + this.productUrl + '/getAll').toPromise();
  }

}
