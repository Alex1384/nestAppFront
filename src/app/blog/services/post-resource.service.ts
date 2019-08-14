import { Injectable } from '@angular/core';
import { ApiConfig } from '../ApiConfig';
import { HttpClient } from '@angular/common/http';
import { PostListItem } from './dataModel/postListItem';
import { Observable } from 'rxjs';

@Injectable()
export class PostResourceService {

  private readonly URL = ApiConfig.url + '/posts';

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<PostListItem[]> {
    return this.httpClient.get(this.URL) as Observable<PostListItem[]>;

  }
}
