import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { PickEmojiService } from './layouts/feed/pick-emoji/pick-emoji.service';
import { RoutingHistoryService } from './core/routing-history.service';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './core/scroll.service';
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

  @ViewChild('routerContainer') routerContainer: ElementRef<HTMLDivElement>;

  private subs: Subscription[] = [];

  constructor(
    public readonly auth: AuthService,
    readonly pickEmojiService: PickEmojiService,
    public readonly translate: TranslateService,
    private readonly historyService: RoutingHistoryService,
    private readonly scrollService: ScrollService,
    private readonly renderer: Renderer2
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

  readonly scrollRouterContainer = (event: Event) => {
    this.scrollTop = (event.target as HTMLDivElement).scrollTop;
    this.scrollService.scroll.emit();
  };

  ngAfterViewInit(): void {
    const firstSub = this.scrollService.scrollDiff.subscribe(diff => {
      this.scrollTop = this.scrollTop + diff;
      this.renderer.setAttribute(this.routerContainer.nativeElement, 'scrollTop', this.scrollTop.toString());
    });
    this.routerContainer.nativeElement.addEventListener('scroll', this.scrollRouterContainer, { passive: true });
    this.subs.push(firstSub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub?.unsubscribe());
    this.subs = [];
    this.routerContainer.nativeElement.removeEventListener('scroll', this.scrollRouterContainer);
  }
}
