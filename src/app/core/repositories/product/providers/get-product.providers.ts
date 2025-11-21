import { inject } from "@angular/core";
import { GetProductAbsRepository } from "../../../business/product/abstractions/get-product-abs.repository";
import { GetProductUseCase } from "../../../usecases/product/get-product.usecase";
import { GetProductRepository } from "../repositories/get-product.repository";

export function provideGetProduct() {
  return [
    { provide: GetProductAbsRepository, useClass: GetProductRepository },
    {
      provide: GetProductUseCase,
      useFactory: () =>
        new GetProductUseCase(inject(GetProductAbsRepository)),
    }
  ];
}
