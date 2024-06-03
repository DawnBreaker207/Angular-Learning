import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenService } from './authen.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(AuthenService);
  const router = new Router();
  if (userService.Check_User_Valid()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
