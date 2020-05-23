import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { UFeedDocFragment } from '../../../__generated/user-gql-services';
import { AFeedDocFragment } from '../../../__generated/anonymous-gql-services';
import { FeedService } from '../feed/feed.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedCardComponent {

  showComments = false;

  @Input() doc: UFeedDocFragment | AFeedDocFragment;
  constructor(private feedService: FeedService) { }

  toggleReaction(documentId: string, reactionId: string) {
    this.feedService.toggleDocumentReaction({ reactionId, documentId });
  }
  get reactions() {
    return (this.doc as UFeedDocFragment).reactions;
  }
}
