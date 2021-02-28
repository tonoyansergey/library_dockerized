import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private error: string;
  private flag: boolean = false;

  constructor(private loginService: LoginService, private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.flag = true;
    this.loginService.logIn(form).subscribe(
      resp => {
        this.tokenService.setTokenInCookie(resp.headers.get('authorization'));
        this.tokenService.setUserDetailsCookie(resp.body.userName);
        this.tokenService.setEmailInCookie(resp.body.email);
        this.tokenService.setUIDInCookie(resp.body.id.toString());
        this.router.navigate(['./']);
      },
      (error: HttpErrorResponse) => {
        this.error = error.error;
      }
    );
  }
}
