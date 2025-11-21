import { Component, inject } from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { provideCreateProduct } from '../../../../core/repositories/product/providers/create-product.providers';
import { CreateProductUseCase } from '../../../../core/usecases/product/create-product.usecase';
import { CreateProductModel } from '../../../../core/domain/product/models/create-product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-page',
  imports: [ProductFormComponent],
  templateUrl: './create-product-page.component.html',
  styleUrl: './create-product-page.component.css',
   providers: [
    provideCreateProduct()
  ]
})
export class CreateProductPageComponent {

  constructor(
    private router: Router
  ) {  }

    private createProductUseCase = inject(CreateProductUseCase);

    saveProduct(product:CreateProductModel) {
      this.createProductUseCase.execute(product)
      .subscribe({
        next: (response) => {
          console.log('Producto creado con éxito:', response);
          this.router.navigate(['/catalogs/products']);
        }
      });
    }


}
