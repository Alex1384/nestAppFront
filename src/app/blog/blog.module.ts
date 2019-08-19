import { NgModule } from '@angular/core';
import { PostService } from './post/services/post.service';
import { PostResourceService } from './post/services/post-resource.service';
import { PostModule } from './post/post.module';



@NgModule({
  declarations: [],
  imports: [
    PostModule


  ],
  exports: [
    PostModule
  ],

})
export class BlogModule { }
