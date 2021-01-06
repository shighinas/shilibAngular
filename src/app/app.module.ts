import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AlertModule } from './_alert';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { NewbookComponent } from './newbook/newbook.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { SingleAuthorComponent } from './single-author/single-author.component';
import { AuthService } from './auth.service';
import { AuthorsService } from './authors.service';
import { BooksService } from './books.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FooterComponent,
    SigninComponent,
    AuthorsComponent,
    BooksComponent,
    NavbarComponent,
    SingleBookComponent,
    NewbookComponent,
    NewAuthorComponent,
    SingleAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertModule
  ],
  providers: [AuthService, AuthorsService, BooksService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
