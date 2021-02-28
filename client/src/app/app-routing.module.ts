import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from "./component/book/book.component";
import {HomeComponent} from "./component/home/home.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {LoginComponent} from "./component/login/login.component";


const routes: Routes = [
  { path: "books", component: BookComponent},
  { path: "", component: HomeComponent},
  { path: "signUp", component: SignUpComponent},
  { path: "login", component: LoginComponent}
  ];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
