import { Injectable } from '@angular/core';
import { PostResourceService } from './post-resource.service';
import { Observable } from 'rxjs';
import { PostDto } from './dataModel/postDto';
import { CreatePostDto } from './dataModel/createPostDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postResource: PostResourceService) { }

  public getAllPostItems(): Observable<PostDto[]> {
    return this.postResource.findAll();
  }

  public createPost(createPostDto: CreatePostDto): Observable<CreatePostDto> {
    return this.postResource.create(createPostDto);
  }
}
