import { Observable } from "rxjs";
import { CreateProductModel } from "../../../domain/product/models/create-product.model";

export abstract class CreateProductAbsRepository {
  abstract createProduct(product: CreateProductModel): Observable<number>;
}
