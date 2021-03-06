import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appAuthenticated]'
})
export class AuthenticatedDirective implements OnInit, OnDestroy {
  @Input()
  appAuthenticated = true;
  private subs: Subscription[] = [];

  constructor(private readonly el: ElementRef, private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.subs.push(
      this.authService.isLoggedIn$.subscribe(isLoggedIn => {
        if (isLoggedIn === this.appAuthenticated) {
          this.el.nativeElement.style.display = 'block';
        } else {
          this.el.nativeElement.style.display = 'none';
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }
}
