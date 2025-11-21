import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetProductsAbsRepository } from "../../../business/product/abstractions/get-products-abs.repository";
import { Observable } from "rxjs";
import { GetProductsModel } from "../../../domain/product/models/get-products.model";

@Injectable()
export class GetProductsRepository implements GetProductsAbsRepository {
  constructor(private http: HttpClient) { }
  getProducts(pageNumber: number, pageSize: number): Observable<GetProductsModel> {
    return this.http.get<GetProductsModel>(`https://localhost:7164/GetProducts?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

}
