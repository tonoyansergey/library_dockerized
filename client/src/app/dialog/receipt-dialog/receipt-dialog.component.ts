import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-receipt-dialog',
  templateUrl: './receipt-dialog.component.html',
  styleUrls: ['./receipt-dialog.component.css']
})
export class ReceiptDialogComponent implements OnInit {

  private rCode: string;

  constructor(private dialogRef: MatDialogRef<ReceiptDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.rCode = data.rCode;
  }

  ngOnInit() {
  }

}
