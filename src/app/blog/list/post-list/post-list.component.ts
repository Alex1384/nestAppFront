import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public postList;


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postList = this.postService.getAllPostItems();
  }



}
