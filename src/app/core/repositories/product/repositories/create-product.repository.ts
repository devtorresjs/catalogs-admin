import { Observable } from "rxjs";
import { CreateProductAbsRepository } from "../../../business/product/abstractions/create-product-abs.repository";
import { CreateProductModel } from "../../../domain/product/models/create-product.model";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { toCreateProductEntity } from "../mappers/create-product.mapper";
import { environment } from "../../../../../environments/environment";

const BASE_URL = environment.baseUrl;

@Injectable()
export class CreateProductRepository implements CreateProductAbsRepository {

  constructor(private http: HttpClient) { }


  createProduct(product: CreateProductModel): Observable<number> {
    const productEntity = toCreateProductEntity(product);
    return this.http.post<number>(BASE_URL + '/CreateProduct', productEntity);
  }
}
