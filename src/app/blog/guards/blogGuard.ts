import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/common/auth/services/auth.service';


@Injectable()
export class BlogGuard implements CanActivate {

  constructor(private readonly router: Router, private readonly authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const isUserAutorized = this.authService.isAuthorised();
    if (!isUserAutorized) {
      this.router.navigate(['login']);
    }

    return of(isUserAutorized);
  }
}
