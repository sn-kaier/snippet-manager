import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl: string;
  constructor() {}

  ngOnInit(): void {}
  //
  // get image() {
  //   if (!this.imageUrl) {
  //     return null;
  //   }
  //   return `url: ('${this.imageUrl}')`;
  // }
}
