import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { MaterialModule } from './common/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { BlogGuard } from './blog/guards/blogGuard';
import { AuthModule } from './common/auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    AuthModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
