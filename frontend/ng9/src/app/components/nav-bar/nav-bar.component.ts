import {Component, OnInit} from '@angular/core';
import {AuthService, AuthState} from '../../core/auth.service';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {SearchService} from '../../core/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  authState: Observable<AuthState>;

  searchValue = '';

  constructor(readonly auth: AuthService, readonly searchService: SearchService) {
    this.authState = auth.authState.pipe(filter(s => s.state !== 'pending'));
  }

  ngOnInit(): void {
  }

  search(search: string) {
    console.log('search', search);
    this.searchService.onSearch.emit(search);
  }

  clearSearch() {
    this.searchValue = '';
    this.searchService.onSearch.emit('');
  }
}
