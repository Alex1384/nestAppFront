import { NgModule } from '@angular/core';
import { PostService } from './post/services/post.service';
import { PostResourceService } from './post/services/post-resource.service';
import { PostModule } from './post/post.module';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],

  imports: [
    PostModule


  ],
  exports: [
    PostModule
  ],

  entryComponents: [
    ConfirmationDialogComponent
  ]

})
export class BlogModule { }
