import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingHistoryService {
  public readonly history = [];

  constructor(
    private router: Router
  ) {
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
}
