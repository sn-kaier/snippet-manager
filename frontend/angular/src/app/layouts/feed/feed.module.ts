import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { ComponentsModule } from '../../components/components.module';
import { FeedComponent } from './feed/feed.component';
import { PickEmojiComponent } from './pick-emoji/pick-emoji.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatIconModule } from '@angular/material/icon';
import { FeedRoutingModule } from './feed-routing-module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScriptEvaluationModule } from '../../components/script-evaluation/script-evaluation.module';

@NgModule({
  declarations: [FeedCardComponent, FeedComponent, PickEmojiComponent],
  exports: [FeedComponent, FeedCardComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    ComponentsModule,
    ScriptEvaluationModule,
    PickerModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HighlightModule,
    TranslateModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    }
  ]
})
export class FeedModule {}
