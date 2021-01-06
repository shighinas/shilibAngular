import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';

import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewbookComponent } from './newbook/newbook.component';
import { SigninComponent } from './signin/signin.component';
import { SingleAuthorComponent } from './single-author/single-author.component';
import { SingleBookComponent } from './single-book/single-book.component';

const routes: Routes = [
  {path:'', component: IntroComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'nav', component: NavbarComponent,
    children:[{path:'books', canActivate:[AuthGuard], component: BooksComponent},
              {path:'authors', canActivate:[AuthGuard], component: AuthorsComponent},
              {path:'book/:id', canActivate:[AuthGuard], component: SingleBookComponent},
              {path:'author/:id', canActivate:[AuthGuard], component: SingleAuthorComponent},
              {path:'addbook',canActivate:[AdminGuard], component: NewbookComponent},
              {path:'addauthor', canActivate:[AdminGuard], component: NewAuthorComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
