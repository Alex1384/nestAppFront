import { Injectable } from '@angular/core';
import { UserLogin } from '../../user/dataModel/userLogin';
import { AuthToken } from '../dataModel/authToken';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../../ApiConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthResourceService {

  private readonly URL = ApiConfig + '/auth';

  constructor(private readonly httpClient: HttpClient) { }

  public signInUser(user: UserLogin): Observable<AuthToken> {
    return of({expires_in: 16000, token: 'asecretTokenString'});
  }
}
