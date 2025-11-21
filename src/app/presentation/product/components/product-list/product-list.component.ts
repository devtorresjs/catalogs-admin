import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { provideGetProducts } from '../../../../core/repositories/product/providers/get-products.providers';
import { GetProductsUseCase } from '../../../../core/usecases/product/get-products.usecase';
import { Product } from '../../../../core/domain/product/models/get-products.model';

@Component({
  selector: 'app-product-list',
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    DecimalPipe,
    MatIconModule,
    MatPaginatorModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [
    provideGetProducts()
  ],
})
export class ProductListComponent {

  dataSource = new MatTableDataSource<Product>([]);

  private getProductsUseCase = inject(GetProductsUseCase);

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.loadProducts();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns = ['image', 'name', 'price', 'stock', 'status', 'actions'];

  loadProducts() {
    this.getProductsUseCase.execute({ pageNumber: 1, pageSize: 10 })
      .subscribe({
        next: (response) => {
          console.log('Productos cargados:', response);
          this.dataSource.data = response.items;
          this.paginator.length = response.totalItems;
        }
      });
  }
}
