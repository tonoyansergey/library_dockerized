import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {Book} from "../../model/book.model";
import {TokenService} from "../../service/token.service";
import {EmailVerificationComponent} from "../email-verification/email-verification.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent implements OnInit {

  theBook: Book;
  emailValue: string;
  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  url: string = '/api/rest/verification/email';


  constructor(  private dialogRef: MatDialogRef<BookingDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data,
                private tokenService: TokenService,
                public dialog: MatDialog,
                private http: HttpClient) {
    this.theBook = data.book;
  }

  ngOnInit() {
  }

  close() {
  }

  verifyEmail(email: string) {
    this.emailValue = email;
    if (this.emailValue==this.tokenService.getEmailFromCookie()) {

      const headers = new HttpHeaders({'auth': this.tokenService.getTokenFromCookie()});

      this.http.post(this.url, parseInt(this.tokenService.getUIDFromCookie()) ,{headers}).subscribe(
        resp => {
          this.openEmailVerifyDialog();
          console.log("Request send")
        },
        error => {
          console.log(error);
        });
    } else {
      console.log("Wrong Email")
    }
  }

  openEmailVerifyDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      book: this.theBook
    };

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(EmailVerificationComponent, dialogConfig);
  }
}
