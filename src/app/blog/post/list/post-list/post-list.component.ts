import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { PostListItem } from 'src/app/blog/post/services/dataModel/postListItem';
import { PostService } from 'src/app/blog/post/services/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public postList: Observable<PostListItem[]>;
  public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imageUrl'];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postList = this.postService.getAllPostItems();
  }



}
