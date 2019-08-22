import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/common/user/dataModel/userLogin';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/common/auth/services/auth.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {} as UserLogin;
  public isLoading = false;

  constructor(private readonly authService: AuthService,
              private readonly router: Router) { }

  ngOnInit() {
  }

  public submit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      this.authService.signIn(this.user)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(() => {
         this.router.navigate(['blog', 'list']);

      })

    }
  }

}
