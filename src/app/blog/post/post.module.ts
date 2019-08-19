import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from './list/post-list.module';
import { PostService } from './services/post.service';
import { PostResourceService } from './services/post-resource.service';



@NgModule({
  declarations: [],
  imports: [
    PostListModule,
    CommonModule
  ],

  exports: [
    PostListModule
  ],

  providers: [
    PostService,
    PostResourceService
  ]
})
export class PostModule { }
