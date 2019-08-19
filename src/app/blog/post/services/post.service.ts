import { Injectable } from '@angular/core';
import { PostResourceService } from './post-resource.service';
import { Observable } from 'rxjs';
import { PostListItem } from './dataModel/postListItem';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postResource: PostResourceService) { }

  public getAllPostItems(): Observable<PostListItem[]> {
    return this.postResource.findAll();
  }
}
