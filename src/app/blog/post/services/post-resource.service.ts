import { Injectable } from '@angular/core';
import { ApiConfig } from '../../ApiConfig';
import { HttpClient } from '@angular/common/http';
import { PostDto } from './dataModel/postDto';
import { Observable } from 'rxjs';
import { CreatePostDto } from './dataModel/createPostDto';

@Injectable()
export class PostResourceService {

  private readonly URL = ApiConfig.url + '/posts';

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<PostDto[]> {
    return this.httpClient.get(this.URL) as Observable<PostDto[]>;
  }

  public create(createPostDto: CreatePostDto): Observable<CreatePostDto> {
    return this.httpClient.post(this.URL, createPostDto) as Observable<CreatePostDto>;
  }
}
