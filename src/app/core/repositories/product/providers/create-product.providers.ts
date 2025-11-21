import { inject } from '@angular/core';
import { CreateProductRepository } from '../repositories/create-product.repository';
import { CreateProductUseCase } from '../../../usecases/product/create-product.usecase';
import { CreateProductAbsRepository } from '../../../business/product/abstractions/create-product-abs.repository';

export function provideCreateProduct() {
  return [
    { provide: CreateProductAbsRepository, useClass: CreateProductRepository },
    {
      provide: CreateProductUseCase,
      useFactory: () =>
        new CreateProductUseCase(inject(CreateProductAbsRepository)),
    }
  ];
}
