import { inject } from '@angular/core';

import { GetProductsAbsRepository } from "../../../business/product/abstractions/get-products-abs.repository";
import { GetProductsUseCase } from "../../../usecases/product/get-products.usecase";
import { GetProductsRepository } from "../repositories/get-products.repository";

export function provideGetProducts() {
  return [
    { provide: GetProductsAbsRepository, useClass: GetProductsRepository },
    {
      provide: GetProductsUseCase,
      useFactory: () =>
        new GetProductsUseCase(inject(GetProductsAbsRepository)),
    }
  ];
}
