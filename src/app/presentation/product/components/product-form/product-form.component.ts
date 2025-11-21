import { Component, effect, inject, input, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormUtils } from '../../../utils/form-utils';
import { CreateProductModel } from '../../../../core/domain/product/models/create-product.model';
import { GetProductModel } from '../../../../core/domain/product/models/get-product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {



  initialData = input<GetProductModel>();

  addProduct = output<CreateProductModel>();

  constructor() {
    effect(() => {
      const data = this.initialData();
      console.log('Initial Data:', data);
      if (data) {
        this.productForm.patchValue(data);
      }
    });
  }

  formUtils = FormUtils;

  private fb = inject(FormBuilder);

  productForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
    descripcion: ['', [Validators.minLength(3), Validators.maxLength(500)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    inventario: [0, [Validators.required, Validators.min(0)]],
    imagenUrl: ['', [Validators.minLength(3), Validators.maxLength(300)]],
    estatus: ['Active'],
  });

  submit() {

    const data = this.initialData();
    if (data) {
      console.log('update data', this.initialData());
    }

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }



    console.log('Datos enviados:', this.productForm.value);
    this.addProduct.emit(this.productForm.value);
  }


}
