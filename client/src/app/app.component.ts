import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-app';

  constructor(private cookieService: CookieService, private router: Router) {
  }

  ngOnInit() {
  }

  logOut() {
      this.cookieService.delete("auth-cookie");
      this.cookieService.delete("user-details-cookie");
    this.cookieService.delete("email-cookie");
      this.router.navigate(['./login']);
  }
}
