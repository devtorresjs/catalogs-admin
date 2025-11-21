import { Component } from '@angular/core';

import { ProductListComponent } from '../../components/product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-page',
  imports: [
   ProductListComponent,
    MatButtonModule
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

}

