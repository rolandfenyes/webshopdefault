import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductDTO} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.productUrl = '/api/playgrounds';
  }

  async getProducts(): Promise<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.baseUrl + this.productUrl + '/getAll').toPromise();
  }

}
