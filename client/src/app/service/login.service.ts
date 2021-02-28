import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {TokenService} from "./token.service";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = '/api/rest/auth/login';
  user: User;

  constructor(private http: HttpClient) {
  }

  logIn(form: NgForm) {
    return this.http.post<User>(this.url, form.value, {observe: 'response'});
  }
}
