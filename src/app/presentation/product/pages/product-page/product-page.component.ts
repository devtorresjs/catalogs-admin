import { Component } from '@angular/core';

import { ProductListComponent } from '../../components/product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-page',
  imports: [
   ProductListComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

}

