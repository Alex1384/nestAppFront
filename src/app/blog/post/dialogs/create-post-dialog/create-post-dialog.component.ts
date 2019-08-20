import { Component } from '@angular/core';
import { CreatePostDto } from '../../services/dataModel/createPostDto';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { finalize } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent  {

  public newPostModel: CreatePostDto = {} as CreatePostDto;
  public isLoading = false;

  constructor(private postService: PostService,
              private dialogRef: MatDialogRef<CreatePostDialogComponent>) { }


  public submit(form: NgForm) {
      if (form.valid) {
        this.isLoading = true;
        this.postService.createPost(this.newPostModel).pipe(finalize( () => this.isLoading = false))
        .subscribe((response) => {
            this.dialogRef.close(response);

        });
      }
  }

}
