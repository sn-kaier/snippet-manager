import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { AuthService, AuthState } from '../../core/auth/auth.service';
import { Observable } from 'rxjs';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnDestroy {
  authState: Observable<AuthState>;

  @Output()
  toggleSideNav = new EventEmitter<void>();

  searchValue = '';
  readonly mobileQuery = this.media.matchMedia('(max-width: 840px)');
  private readonly mobileQueryListener = () => this.changeDetectorRef.detectChanges();

  constructor(
    readonly auth: AuthService,
    readonly searchService: SearchService,
    readonly navBarService: NavBarService,
    private readonly media: MediaMatcher,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly bottomSheet: MatBottomSheet
  ) {
    this.authState = auth.authState.pipe(filter(s => s.state !== 'pending'));
    this.auth.showHintToLogin.subscribe(() => {
      this.bottomSheet.open(ShowLoginHintComponent);
    });
  }

  ngOnInit(): void {
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
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
