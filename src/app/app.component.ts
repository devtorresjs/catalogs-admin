import { Component } from '@angular/core';
import { LayoutComponent } from './presentation/layout/layout.component';
import { LoadingSpinnerComponent } from './presentation/shared/components/loading-spinner/loading-spinner.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  imports: [LayoutComponent, LoadingSpinnerComponent, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalogs-app';
}
