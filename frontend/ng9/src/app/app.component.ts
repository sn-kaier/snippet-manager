import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { PickEmojiService } from './layouts/feed/pick-emoji/pick-emoji.service';
import { RoutingHistoryService } from './core/routing-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Snippets';

  constructor(public readonly auth: AuthService,
              readonly pickEmojiService: PickEmojiService,
              private readonly historyService: RoutingHistoryService
  ) {
    historyService.loadRouting();
  }

  clickOnBg() {
    if (this.pickEmojiService.isOpened$.value) {
      this.pickEmojiService.close();
    }
  }
}
