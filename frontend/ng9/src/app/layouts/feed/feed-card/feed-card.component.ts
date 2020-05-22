import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { UFeedDocFragment } from '../../../__generated/user-gql-services';
import { AFeedDocFragment } from '../../../__generated/anonymous-gql-services';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedCardComponent {

  showComments = false;

  @Input() doc: UFeedDocFragment | AFeedDocFragment;
  constructor() { }

}
