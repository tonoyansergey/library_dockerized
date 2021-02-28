import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user.model";
import {LoginService} from "../../service/login.service";
import {TokenService} from "../../service/token.service";
import {BookService} from "../../service/book.service";
import {MatDialog} from "@angular/material";
import {BookingDialogComponent} from "../../dialog/booking-dialog/booking-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private userName: string = null;

  constructor(private tokenService: TokenService) {

  }

  ngOnInit() {
    this.userName = this.tokenService.getUserDetailsFromCookie();
  }


}
