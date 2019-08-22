import { NgModule } from '@angular/core';

import { PostListComponent } from './post-list/post-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../../common/material/material.module';


@NgModule({
  declarations: [PostListComponent],
  imports: [
    MaterialModule,
    BrowserModule

  ],
  exports: [PostListComponent],
})
export class PostListModule { }
