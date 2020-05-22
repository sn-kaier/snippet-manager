import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-reaction-badge',
  templateUrl: './reaction-badge.component.html',
  styleUrls: ['./reaction-badge.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionBadgeComponent implements OnInit {
  @Input() count: number;

  @Input()
  set reactionId(value: string) {
    this.reactionHtml = value;
    const data = this.emojiService.getData(value, null, 'apple');
    this.spriteStyles = this.emojiService.emojiSpriteStyles(data.sheet, data.set, 16);
  }

  get reactionId(): string {
    return this.reactionHtml;
  }

  @Input() isSelected: boolean;
  @Output() clickReaction = new EventEmitter<string>();

  reactionHtml: string;

  spriteStyles: any;

  constructor(readonly emojiService: EmojiService) {
  }

  ngOnInit(): void {
  }

  async onClick(): Promise<void> {
    this.clickReaction.emit(this.reactionHtml);
  }

}
