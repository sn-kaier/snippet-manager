import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output, ViewChild,
} from '@angular/core';
import { AuthService, AuthState } from '../../core/auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SearchService } from '../../core/search.service';
import { NavBarService } from './nav-bar.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShowLoginHintComponent } from '../../core/auth/show-login-hint/show-login-hint.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit, OnDestroy {
  authState: Observable<AuthState>;

  @Output()
  toggleSideNav = new EventEmitter<void>();

  @ViewChild('searchField', { static: true }) searchField: ElementRef<HTMLInputElement>;

  searchValue = '';
  readonly highlightSearchField$ = new BehaviorSubject<boolean>(false);
  private highlightSearchFieldTimeout: number | undefined;
  readonly mobileQuery = this.media.matchMedia('(max-width: 840px)');
  private readonly mobileQueryListener = () => this.changeDetectorRef.detectChanges();

  constructor(
    readonly auth: AuthService,
    readonly searchService: SearchService,
    readonly navBarService: NavBarService,
    private readonly media: MediaMatcher,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly bottomSheet: MatBottomSheet,
  ) {
    this.authState = auth.authState.pipe(filter(s => s.state !== 'pending'));
    this.auth.showHintToLogin.subscribe(() => {
      this.bottomSheet.open(ShowLoginHintComponent);
    });
  }

  readonly strgPlusFListener = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key.toLowerCase()) {
        case 'f':
          event.preventDefault();
          this.focusSearch().then();
          break;
      }
    }
  }

  private registerShortcutSearchListener() {
    window.addEventListener('keydown', this.strgPlusFListener);
  }

  private unRegisterShortcutSearchListener() {
    window.removeEventListener('keydown', this.strgPlusFListener);
  }

  async focusSearch() {
    const sf = this.searchField.nativeElement;
    console.log('focus search field', sf);
    sf.focus();

    if (this.highlightSearchFieldTimeout) {
      this.highlightSearchField$.next(false);
      clearTimeout(this.highlightSearchFieldTimeout);
      await new Promise(res => setTimeout(res));
    }

    this.highlightSearchField$.next(true);
    this.highlightSearchFieldTimeout = +setTimeout(() => {
      this.highlightSearchField$.next(false);
    }, 150);
  }

  ngOnInit(): void {
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    this.registerShortcutSearchListener();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    this.unRegisterShortcutSearchListener();
  }

  search(search: string) {
    this.searchService.onSearch.emit(search);
  }

  clearSearch() {
    this.searchValue = '';
    this.searchService.onSearch.emit('');
  }

  showLoginHint() {
    this.auth.showLoginHint();
  }
}
