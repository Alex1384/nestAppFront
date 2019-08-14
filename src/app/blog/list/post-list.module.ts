import { NgModule } from '@angular/core';

import { PostListComponent } from './post-list/post-list.component';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [PostListComponent],
  imports: [
    MaterialModule,
    BrowserModule

  ],
  exports: [PostListComponent],
})
export class PostListModule { }
