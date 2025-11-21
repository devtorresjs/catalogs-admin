import { Component, inject, signal } from '@angular/core';
import { provideGetProduct } from '../../../../core/repositories/product/providers/get-product.providers';
import { GetProductUseCase } from '../../../../core/usecases/product/get-product.usecase';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { GetProductModel } from '../../../../core/domain/product/models/get-product.model';
import { ProductFormComponent } from '../../components/product-form/product-form.component';

@Component({
  selector: 'app-edit-product-page',
  imports: [ProductFormComponent],
  templateUrl: './edit-product-page.component.html',
  styleUrl: './edit-product-page.component.css',
  providers: [provideGetProduct()],
})
export class EditProductPageComponent {

  product = signal<GetProductModel>(null!);


  constructor(private activatedRoute: ActivatedRoute) {}

  private getProductUseCase = inject(GetProductUseCase);
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id })=>this.getProductUseCase.execute(id))
    ).subscribe({
      next:(product)=>{
        this.product.set(product);
      }
    });
  }
}
