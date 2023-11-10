import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (next, state) => {
  const sesionStart = localStorage.getItem('sesionStart');
  const router = inject(Router);

  if (sesionStart) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }

}