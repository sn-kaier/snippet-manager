import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UCommentSectionCommentFragment } from '../../../../__generated/user-gql-services';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {

  @Input()
  comment: UCommentSectionCommentFragment;

  @Input()
  isLoggedIn: boolean;

  @Output() toggleReaction = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
