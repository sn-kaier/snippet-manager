import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { PickEmojiService } from './layouts/feed/pick-emoji/pick-emoji.service';
import { RoutingHistoryService } from './core/routing-history.service';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './core/scroll.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShowLoginHintComponent } from './core/auth/show-login-hint/show-login-hint.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Snippets';
  languages = ['en', 'de'];
  sideNavOpened = false;

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
    this.scrollService.scroll.emit();
  }
}
