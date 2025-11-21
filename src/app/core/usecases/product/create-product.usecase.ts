import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { CreateProductAbsRepository } from "../../business/product/abstractions/create-product-abs.repository";
import { CreateProductModel } from "../../domain/product/models/create-product.model";

export class CreateProductUseCase implements UseCase<CreateProductModel, number> {

  constructor(private createProductRepository: CreateProductAbsRepository) { }

  execute(product: CreateProductModel): Observable<number> {
    return this.createProductRepository.createProduct(product);
  }

}
