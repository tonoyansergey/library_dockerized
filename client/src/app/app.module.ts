import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {BookComponent} from "./component/book/book.component";
import {NgxPaginationModule} from "ngx-pagination";
import {AppRoutingModule} from "./app-routing.module";
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import {CookieService} from "ngx-cookie-service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatDatepickerModule,
  MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule
} from "@angular/material";
import { BookingDialogComponent } from './dialog/booking-dialog/booking-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailVerificationComponent } from './dialog/email-verification/email-verification.component';
import { ReceiptDialogComponent } from './dialog/receipt-dialog/receipt-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    SignUpComponent,
    LoginComponent,
    BookingDialogComponent,
    EmailVerificationComponent,
    ReceiptDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule
  ],
  entryComponents: [BookingDialogComponent,
                    EmailVerificationComponent,
                    ReceiptDialogComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
