import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from './list/post-list.module';
import { PostService } from './services/post.service';
import { PostResourceService } from './services/post-resource.service';
import { CreatePostDialogComponent } from './dialogs/create-post-dialog/create-post-dialog.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePostDialogComponent
  ],

  imports: [
    PostListModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],

  exports: [
    PostListModule
  ],

  providers: [
    PostService,
    PostResourceService
  ],

  entryComponents: [
    CreatePostDialogComponent
  ]
})
export class PostModule { }
