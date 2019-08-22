import { NgModule } from '@angular/core';
import { PostModule } from './post/post.module';
import {
   ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { RouterModule } from '@angular/router';
import { BlogRouting } from './blogRouting';
import { BlogGuard } from './guards/blogGuard';



@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],

  imports: [
    PostModule,
    RouterModule.forChild(BlogRouting)


  ],
  exports: [
    PostModule
  ],

  providers: [BlogGuard],


  entryComponents: [
    ConfirmationDialogComponent
  ]

})
export class BlogModule { }
