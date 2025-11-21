import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { provideGetProducts } from '../../../../core/repositories/product/providers/get-products.providers';
import { GetProductsUseCase } from '../../../../core/usecases/product/get-products.usecase';
import { GetProductsModel, Product } from '../../../../core/domain/product/models/get-products.model';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';

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

  displayedColumns = ['image', 'name', 'price', 'stock', 'status', 'actions'];
  dataSource = new MatTableDataSource<Product>([]);
  totalItems = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private getProductsUseCase = inject(GetProductsUseCase);

  ngAfterViewInit(): void {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.getProducts(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize
          );
        }),
        map((resp: GetProductsModel) => {
          this.totalItems = resp.totalItems;
          return resp.items;
        }),
        catchError(() => of([]))
      )
      .subscribe((items) => {
        this.dataSource.data = items;
      });
  }

  private getProducts(pageNumber: number, pageSize: number) {
    return this.getProductsUseCase.execute({ pageNumber, pageSize });
  }
}
