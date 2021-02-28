import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "../model/book.model";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = "/api/rest/books";

  constructor(private tokenService: TokenService, private http: HttpClient) { }

  getBooks() {

    const headers = new HttpHeaders({'auth': this.tokenService.getTokenFromCookie(),
                      'user-details' : this.tokenService.getUserDetailsFromCookie()});
    return this.http.get<Book[]>(this.url,{headers});
  }
}
