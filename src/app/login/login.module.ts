import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../common/material/material.module';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './loginRoutes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(LoginRoutes)
  ],
})
export class LoginModule { }
