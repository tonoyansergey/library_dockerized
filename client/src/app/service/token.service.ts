import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService: CookieService) { }

  setTokenInCookie(token: string) {
    this.cookieService.set("auth-cookie", token,1);
  }

  getTokenFromCookie() {
    return this.cookieService.get("auth-cookie");
  }

  setUserDetailsCookie(details: string) {
    this.cookieService.set("user-details-cookie",details,1);
  }

  getUserDetailsFromCookie() {
    return this.cookieService.get("user-details-cookie");
  }

  setEmailInCookie(email: string) {
    this.cookieService.set("email-cookie", email, 1);
  }

  getEmailFromCookie() {
    return this.cookieService.get("email-cookie");
  }

  setUIDInCookie(id: string) {
    this.cookieService.set("UID", id, 1);
  }

  getUIDFromCookie() {
    return this.cookieService.get("UID");
  }
}
