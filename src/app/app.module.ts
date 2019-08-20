import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { MaterialModule } from './blog/material.module';
import { HttpClientModule } from '@angular/common/http';



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
    BrowserAnimationsModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
