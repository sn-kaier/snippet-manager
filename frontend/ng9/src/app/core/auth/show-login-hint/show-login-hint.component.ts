import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-show-login-hint',
  templateUrl: './show-login-hint.component.html',
  styleUrls: ['./show-login-hint.component.scss']
})
export class ShowLoginHintComponent implements OnInit {
  constructor(private readonly bottomSheetRef: MatBottomSheetRef<ShowLoginHintComponent>) {}

  ngOnInit(): void {}

  close() {
    this.bottomSheetRef.dismiss();
  }
}
