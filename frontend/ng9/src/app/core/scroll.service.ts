import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  readonly scroll = new EventEmitter();
  readonly scrollDiff = new EventEmitter<number>();
  constructor() {}
}
