import { Observable } from "rxjs";
import { GetProductAbsRepository } from "../../business/product/abstractions/get-product-abs.repository";
import { GetProductModel } from "../../domain/product/models/get-product.model";

export class GetProductUseCase {
  constructor(private readonly getProductRepository: GetProductAbsRepository) {}

  execute(id: number): Observable<GetProductModel> {
    return this.getProductRepository.getProductById(id);
  }
}
