import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.scss']
})
export class BgComponent implements OnInit {

  @Input()
  blur = 3;

  @Input()
  brightness = 1;

  constructor() { }

  ngOnInit(): void {
  }

  get imgFilter(): string {
    return `blur(${this.blur}px) brightness(${this.brightness})`;
  }

}
