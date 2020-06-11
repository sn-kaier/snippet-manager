import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingHistoryService {
  public readonly history = [];

  constructor(
    private router: Router,
    readonly searchService: SearchService
  ) {
    searchService.onSearch.subscribe((searchText: string) => {
      const currentRoute = this.currentRoute;
      if (searchText && !currentRoute?.startsWith('/feed')) {
        router.navigate(['/feed', 'public']);
      }
    });
  }

  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        this.history.push(urlAfterRedirects);
      });
  }

  public get previousRoute(): string {
    if (this.history.length > 1) {
      return this.history[this.history.length - 2];
    }
    return null;
  }

  public get currentRoute(): string {
    if (this.history.length > 1) {
      return this.history[this.history.length - 1];
    }
    return null;
  }
}
