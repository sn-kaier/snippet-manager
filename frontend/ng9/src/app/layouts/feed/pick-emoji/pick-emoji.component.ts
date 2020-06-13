import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { PickEmojiService } from './pick-emoji.service';
import { Subscription } from 'rxjs';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-pick-emoji',
  templateUrl: './pick-emoji.component.html',
  styleUrls: ['./pick-emoji.component.scss']
})
export class PickEmojiComponent implements OnInit, OnDestroy {
  @HostBinding('style.top') top = '0px';
  @HostBinding('style.left') left = '0px';

  showEmoji = this.pickEmojiService.isOpened$;

  private sub: Subscription;

  constructor(private readonly pickEmojiService: PickEmojiService) {}

  ngOnInit(): void {
    this.sub = this.pickEmojiService.config$.subscribe(config => {
      if (config) {
        const clientHeight = window.innerHeight;
        const height = 430;
        const maxY = clientHeight - height;
        const posY = Math.min(config.positionY + 30, maxY);

        this.top = `${posY}px`;
        this.left = `${config.positionX - 5}px`;
      }
    });
  }

  addEmoji({ emoji }: { emoji: EmojiData }) {
    this.pickEmojiService.addEmoji(emoji.unified);
    this.pickEmojiService.close();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub = null;
  }

  preventPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
