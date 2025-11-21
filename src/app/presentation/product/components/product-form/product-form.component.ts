import { Component, effect, inject, input, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CreateProductUseCase } from '../../../../core/usecases/product/create-product.usecase';
import { FormUtils } from '../../../utils/form-utils';
import { CreateProductModel } from '../../../../core/domain/product/models/create-product.model';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {



  id = input<number>();

  addProduct = output<CreateProductModel>();

  private createProductUseCase = inject(CreateProductUseCase);

  formUtils = FormUtils;

  private fb = inject(FormBuilder);

  productForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
    descripcion: ['', [Validators.minLength(3), Validators.maxLength(500)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    inventario: [0, [Validators.required, Validators.min(0)]],
    imagenUrl: ['', [Validators.minLength(3), Validators.maxLength(300)]],
    estatus: ['Active', [Validators.minLength(3), Validators.maxLength(20)]],
  });

  submit() {

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    //this.createProductUseCase.execute(this.productForm.value);
    console.log('Datos enviados:', this.productForm.value);
    this.addProduct.emit(this.productForm.value);
  }


}
