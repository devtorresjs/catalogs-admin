import { Observable } from "rxjs";
import { GetProductsModel } from "../../../domain/product/models/get-products.model";

export abstract class GetProductsAbsRepository {
  abstract getProducts(pageNumber: number, pageSize: number): Observable<GetProductsModel>;
}
