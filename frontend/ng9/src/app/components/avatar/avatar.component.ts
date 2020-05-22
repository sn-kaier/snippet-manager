import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit {

  @Input() imageUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

  get image() {
    return `url: ('${this.imageUrl}')`;
  }
}
