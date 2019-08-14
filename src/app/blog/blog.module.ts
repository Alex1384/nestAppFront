import { NgModule } from '@angular/core';
import { PostListModule } from './list/post-list.module';
import { PostService } from './services/post.service';
import { PostResourceService } from './services/post-resource.service';



@NgModule({
  declarations: [],
  imports: [
    PostListModule,


  ],
  exports: [
    PostListModule
  ],

  providers: [
    PostService,
    PostResourceService
  ]
})
export class BlogModule { }
