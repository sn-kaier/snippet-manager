import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { PickEmojiService } from '../../../layouts/feed/pick-emoji/pick-emoji.service';
import { FeedService } from '../../../layouts/feed/feed/feed.service';

export interface RGroup {
  count: number;
  reactionid: string;
}

export interface CommonReaction {
  id: string;
  reactionId: string;
}

@Component({
  selector: 'app-reaction-section',
  templateUrl: './reaction-section.component.html',
  styleUrls: ['./reaction-section.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionSectionComponent implements OnInit {
  readonly thumbsUpId = '1F44D';
  readonly thumbsDownId = '1F44E';

  @Input() set reactionsGroup(reactionsGroup: RGroup[]) {
    this.filteredReactionsGroup = reactionsGroup.filter(f => f.reactionid !== this.thumbsUpId && f.reactionid !== this.thumbsDownId);
    this.rGroup = reactionsGroup;
  }

  rGroup: RGroup[];

  @Input()
  reactions: CommonReaction[];

  @Input()
  documentId: string;

  @Input()
  commentId: string;

  filteredReactionsGroup: RGroup[];

  constructor(private readonly pickEmojiService: PickEmojiService,
              private readonly el: ElementRef,
              private readonly feedService: FeedService) {
  }

  ngOnInit(): void {
  }

  get countThumbsUp() {
    return this.rGroup?.find(g => g.reactionid === this.thumbsUpId)?.count ?? 0;
  }

  get isThumbsUpSelected() {
    return !!this.reactions?.find(g => g.reactionId === this.thumbsUpId);
  }

  get countThumbsDown() {
    return this.rGroup?.find(g => g.reactionid === this.thumbsDownId)?.count ?? 0;
  }

  get isThumbsDownSelected() {
    return !!this.reactions?.find(g => g.reactionId === this.thumbsDownId);
  }

  isSelected(reactionId: string): boolean {
    if (!this.reactions?.length) {
      return false;
    }
    return !!this.reactions.find(r => r.reactionId === reactionId);
  }

  openEmojiPicker() {
    const thisRef = this.el.nativeElement;
    const clientRect = thisRef.getBoundingClientRect();

    setTimeout(async () => {
      try {
        const pickedUnified = await this.pickEmojiService.showEmoji(clientRect.x, clientRect.y);
        if (this.documentId) {
          this.feedService.toggleDocumentReaction({ reactionId: pickedUnified, documentId: this.documentId });
        } else if (this.commentId) {
          // TODO: toggle comment reaction
        }
      } catch (e) {
        // closed instead of selected an emoji
      }
    });
  }

  clickReaction(reactionId: string) {
    if (this.documentId) {
      this.feedService.toggleDocumentReaction({ reactionId, documentId: this.documentId });
    } else {
      // TODO: toggle comment reaction
    }
  }
}
