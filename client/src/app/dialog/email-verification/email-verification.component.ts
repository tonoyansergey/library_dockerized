import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {TokenService} from "../../service/token.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "../../model/book.model";
import {ReceiptDialogComponent} from "../receipt-dialog/receipt-dialog.component";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  private url: string = '/api/rest/booking/order';
  private theBook: Book;
  private rCode: string;

  constructor(private dialogRef: MatDialogRef<EmailVerificationComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private tokenService: TokenService,
              private http: HttpClient, public dialog: MatDialog) {
    this.theBook = data.book;
  }

  ngOnInit() {
  }


  close() {

  }

  submitVCode(vCode: string) {
    const headers = new HttpHeaders({'auth': this.tokenService.getTokenFromCookie()});
    // const body = {userID: this.tokenService.getUIDFromCookie(), bookID: this.theBook.id.toString(), vCode: vCode};

    this.http.post(this.url, { userID: parseInt(this.tokenService.getUIDFromCookie()),  bookID: this.theBook.id, verCode: vCode },{headers, observe: 'response' , responseType: 'text'}).subscribe(
      resp => {
        this.rCode = resp.body;
        this.openConfirmationDialog();
      },
      error => {
        console.log(error);
      });
  }

  openConfirmationDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      rCode: this.rCode
    };

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(ReceiptDialogComponent, dialogConfig);
  }
}
