import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

import { UFeedDocFragment } from '../../../__generated/user-gql-services';
import { AFeedDocFragment } from '../../../__generated/anonymous-gql-services';
import { FeedService } from '../feed/feed.service';
import { AuthService } from '../../../core/auth.service';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedCardComponent {
  showComments = false;

  @Input() doc: UFeedDocFragment | AFeedDocFragment;
  @Input() hideAuthor: boolean;

  @Output() changeIsPublic = new EventEmitter<boolean>();
  @ViewChild('codeElement') codeElement: ElementRef<HTMLDivElement>;

  highlightResult: HighlightResult;
  textCollapsed = true;
  canTextExpand = false;

  constructor(
    private readonly feedService: FeedService,
    private readonly authService: AuthService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  toggleReaction(documentId: string, reactionId: string) {
    this.feedService.toggleDocumentReaction({ reactionId, documentId });
  }

  get reactions() {
    return (this.doc as UFeedDocFragment).reactions;
  }

  get isOwnDocument(): boolean {
    const authId = this.authService.authId;
    if (!authId) {
      return false;
    }
    return authId === (this.doc as UFeedDocFragment).author.authId;
  }

  onHighlighted(highlightResult: HighlightResult) {
    this.highlightResult = highlightResult;

    setTimeout(() => {
      if (!this.codeElement?.nativeElement) {
        return;
      }
      const clientHeight = this.codeElement.nativeElement.clientHeight;
      const scrollHeight = this.codeElement.nativeElement.scrollHeight;
      const canTextExpand = scrollHeight > clientHeight;
      if (canTextExpand !== this.canTextExpand) {
        this.canTextExpand = canTextExpand;
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  toggleTextCollapsed() {
    this.textCollapsed = !this.textCollapsed;
  }
}
