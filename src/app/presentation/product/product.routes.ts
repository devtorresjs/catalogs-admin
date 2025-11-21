import { Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';

export const productRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        title: 'Gestión de Productos',
        component: ProductPageComponent
      },
      {
        path: 'createproduct',
        title: 'Creación de Productos',
        component: CreateProductPageComponent
      },
      {
        path: 'editproduct/:id',
        title: 'Edición de Productos',
        component: EditProductPageComponent
      },
      {
        path: '**',
        redirectTo: 'products'
      }
    ]
  }
]
