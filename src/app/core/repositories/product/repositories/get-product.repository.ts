import { map, Observable } from "rxjs";
import { GetProductAbsRepository } from "../../../business/product/abstractions/get-product-abs.repository";
import { GetProductModel } from "../../../domain/product/models/get-product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { toGetProductModel } from "../mappers/get-product.mapper";
import { GetProductEntity } from "../entities/get-product.entity";

@Injectable()
export class GetProductRepository implements GetProductAbsRepository {
  constructor(private http: HttpClient) { }
  getProductById(id: number): Observable<GetProductModel> {

    return this.http.get<GetProductEntity>(`https://localhost:7164/getproduct/${id}`)
    .pipe(map((response => toGetProductModel(response))));
  }

}
