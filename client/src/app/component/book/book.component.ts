import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book.model";
import {MatDialog, MatDialogConfig} from '@angular/material';
import {BookingDialogComponent} from "../../dialog/booking-dialog/booking-dialog.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  p: number = 1;
  books: Book[];


  constructor(private bookService: BookService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      data => {this.books = data
      },
      (error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.router.navigate(['./']);
        }
      }
      );
  }

  openBookingDialog(book: Book) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      book: book
    };

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;


    this.dialog.open(BookingDialogComponent, dialogConfig);
  }
}
