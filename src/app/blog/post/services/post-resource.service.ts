import { Injectable } from '@angular/core';
import { ApiConfig } from '../../../common/ApiConfig';
import { HttpClient } from '@angular/common/http';
import { PostDto } from './dataModel/postDto';
import { Observable, observable } from 'rxjs';
import { CreatePostDto } from './dataModel/createPostDto';
import { EditPostDto } from './dataModel/editPostDto';

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

 public edit(editPostDto: EditPostDto): Observable <PostDto> {
    return this.httpClient.put(this.URL, editPostDto ) as Observable<EditPostDto>;
 }

 public delete(postId: number): Observable<any> {
    return this.httpClient.delete(this.URL + '/ ' + postId);
 }
}
