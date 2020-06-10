import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  triggerReload = new EventEmitter<void>();

  constructor() {
  }
}
