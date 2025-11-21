import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { GetProductsModel } from "../../domain/product/models/get-products.model";
import { GetProductsAbsRepository } from "../../business/product/abstractions/get-products-abs.repository";

export class GetProductsUseCase implements UseCase<{ pageNumber: number; pageSize: number}, GetProductsModel> {

  constructor(private getProductsRepository: GetProductsAbsRepository) {}
  execute(params: { pageNumber: number; pageSize: number; }): Observable<GetProductsModel> {
    return this.getProductsRepository.getProducts(params.pageNumber, params.pageSize);
  }


}
