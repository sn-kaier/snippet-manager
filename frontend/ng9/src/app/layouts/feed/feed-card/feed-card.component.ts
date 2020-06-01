import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { UFeedDocFragment } from '../../../__generated/user-gql-services';
import { AFeedDocFragment } from '../../../__generated/anonymous-gql-services';
import { FeedService } from '../feed/feed.service';
import { AuthService } from '../../../core/auth.service';

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

  constructor(private readonly feedService: FeedService,
              private readonly authService: AuthService) {
  }

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
}
