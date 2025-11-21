import { Observable } from "rxjs";
import { GetProductModel } from "../../../domain/product/models/get-product.model";

export abstract class GetProductAbsRepository {
  abstract getProductById(id: number): Observable<GetProductModel>;
}
