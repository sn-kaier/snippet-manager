import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedCardComponent} from './feed-card/feed-card.component';
import {ComponentsModule} from '../../components/components.module';
import {FeedComponent} from './feed/feed.component';
import { PickEmojiComponent } from './pick-emoji/pick-emoji.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [FeedCardComponent, FeedComponent, PickEmojiComponent],
  exports: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PickerModule
  ]
})
export class FeedModule {
}
