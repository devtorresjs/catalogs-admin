import {Routes} from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';

export const productRoutes: Routes=[
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
      path:'**',
      redirectTo:'products'
    }
  ]
  }
]
