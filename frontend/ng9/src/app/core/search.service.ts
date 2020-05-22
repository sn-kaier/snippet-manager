import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public readonly onSearch = new EventEmitter<string>();

  constructor() { }
}
