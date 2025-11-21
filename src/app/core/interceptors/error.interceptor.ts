import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NotificationService } from './notification.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notify = inject(NotificationService);

  return next(req).pipe(
    catchError(err => {

      notify.error(
        'El servicio presenta intermitencias. Por favor, inténtalo más tarde.'
      );

      return throwError(() => err);
    })
  );
};
