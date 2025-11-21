import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalogs',
    loadChildren:()=>import('./presentation/product/product.routes').then(m=>m.productRoutes)
  },
  {
    path: 'auth',
    loadChildren:()=>import('./presentation/auth/auth.routes').then(m=>m.authRoutes)
  }
];
