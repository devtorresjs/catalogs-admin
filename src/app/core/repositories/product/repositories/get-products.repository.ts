import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetProductsAbsRepository } from "../../../business/product/abstractions/get-products-abs.repository";
import { Observable } from "rxjs";
import { GetProductsModel } from "../../../domain/product/models/get-products.model";
import { environment } from "../../../../../environments/environment";

const BASE_URL = environment.baseUrl;

@Injectable()
export class GetProductsRepository implements GetProductsAbsRepository {
  constructor(private http: HttpClient) { }
  getProducts(pageNumber: number, pageSize: number): Observable<GetProductsModel> {
    return this.http.get<GetProductsModel>(`${BASE_URL}/GetProducts?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

}
