import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { UFeedDocFragment, UFeedDocReactionGroupFragment } from '../../../__generated/user-gql-services';
import { AFeedDocFragment } from '../../../__generated/anonymous-gql-services';
import { PickEmojiService } from '../../../layouts/feed/pick-emoji/pick-emoji.service';
import { FeedService } from '../../../layouts/feed/feed/feed.service';

@Component({
  selector: 'app-reaction-section',
  templateUrl: './reaction-section.component.html',
  styleUrls: ['./reaction-section.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionSectionComponent implements OnInit {
  readonly thumbsUpId = '1F44D';
  readonly thumbsDownId = '1F44E';

  @Input() set doc(doc: UFeedDocFragment | AFeedDocFragment) {
    this.pDoc = doc;
    this.filteredReactionsGroup = doc.reactionsGroup.filter(f => f.reactionId !== this.thumbsUpId && f.reactionId !== this.thumbsDownId);
  }

  get doc() {
    return this.pDoc;
  }

  private pDoc: UFeedDocFragment | AFeedDocFragment;
  filteredReactionsGroup: UFeedDocReactionGroupFragment[];

  constructor(private readonly pickEmojiService: PickEmojiService,
              private readonly el: ElementRef,
              private readonly feedService: FeedService) {
  }

  ngOnInit(): void {
  }

  get countThumbsUp() {
    return this.doc?.reactionsGroup?.find(g => g.reactionId === this.thumbsUpId)?.count ?? 0;
  }

  get isThumbsUpSelected() {
    return !!(this.doc as UFeedDocFragment)?.reactions?.find(g => g.reaction_id === this.thumbsUpId);
  }

  get countThumbsDown() {
    return this.doc?.reactionsGroup?.find(g => g.reactionId === this.thumbsDownId)?.count ?? 0;
  }

  get isThumbsDownSelected() {
    return !!(this.doc as UFeedDocFragment)?.reactions?.find(g => g.reaction_id === this.thumbsDownId);
  }

  isSelected(reactionId: string): boolean {
    const uDoc = this.doc as UFeedDocFragment;
    if (!uDoc?.reactions?.length) {
      return false;
    }
    return !!uDoc.reactions.find(r => r.reaction_id === reactionId);
  }

  openEmojiPicker() {
    const thisRef = this.el.nativeElement;
    const clientRect = thisRef.getBoundingClientRect();
    setTimeout(async () => {
      try {
        const pickedUnified = await this.pickEmojiService.showEmoji(clientRect.x, clientRect.y);
        this.feedService.toggleDocumentReaction({ reaction_id: pickedUnified, documentId: this.doc.id });
      } catch (e) {
        // closed instead of selected an emoji
      }
    });
  }

  clickReaction(reactionId: string) {
    this.feedService.toggleDocumentReaction({ reaction_id: reactionId, documentId: this.doc.id });
  }
}
