import { Injectable } from '@angular/core';
import { UserLogin } from '../../user/dataModel/userLogin';
import { Observable } from 'rxjs';
import { AuthResourceService } from './auth-resource.service';
import { AuthToken } from '../dataModel/authToken';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_STORAGE_KEY = 'auth_token';

  constructor(private readonly resource: AuthResourceService,
              private readonly router: Router) { }

  public signIn(user: UserLogin): Observable<void> {
    return this.resource.signInUser(user)
    .pipe(
      map( (authToken) => {
        this.storeToken(authToken)
      })
    );
  }

  public isAuthorised(): boolean {
      return !_.isEmpty(this.loadToken());
  }

  public logOut() {
    this.cleanToken();
    this.router.navigate(['login']);
  }

  private cleanToken() {
    localStorage.removeItem(this.AUTH_STORAGE_KEY);
  }

  private storeToken(authToken: AuthToken) {
    localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(authToken));
  }

  private loadToken(): AuthToken {
      try {
        return JSON.parse(localStorage.getItem(this.AUTH_STORAGE_KEY));
      } catch {
          console.error('Bad Json Format for token item');

        }

  }

}
