import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { PickEmojiService } from './layouts/feed/pick-emoji/pick-emoji.service';
import { RoutingHistoryService } from './core/routing-history.service';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './core/scroll.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShowLoginHintComponent } from './core/auth/show-login-hint/show-login-hint.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'Snippets';
  languages = ['en', 'de'];
  sideNavOpened = false;
  scrollTop = 0;

  private scrollSub: Subscription;

  constructor(
    public readonly auth: AuthService,
    readonly pickEmojiService: PickEmojiService,
    public readonly translate: TranslateService,
    private readonly historyService: RoutingHistoryService,
    private readonly scrollService: ScrollService
  ) {
    historyService.loadRouting();

    // i18n
    translate.addLangs(this.languages);
    translate.setDefaultLang('de');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/de|en/) ? browserLang : 'en');
  }

  clickOnBg() {
    if (this.pickEmojiService.isOpened$.value) {
      this.pickEmojiService.close();
    }
  }

  scrollRouterContainer(event: Event) {
    this.scrollTop = (event.target as HTMLDivElement).scrollTop;
    this.scrollService.scroll.emit();
  }

  ngAfterViewInit(): void {
    this.scrollSub = this.scrollService.scrollDiff.subscribe(diff => {
      this.scrollTop = this.scrollTop + diff;
    });
  }

  ngOnDestroy(): void {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();
      this.scrollSub = undefined;
    }
  }
}
