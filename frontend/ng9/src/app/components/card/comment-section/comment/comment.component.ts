import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UCommentSectionCommentFragment } from '../../../../__generated/user-gql-services';
import { ACommentSectionCommentFragment } from '../../../../__generated/anonymous-gql-services';
import { CommonReaction } from '../../reaction-section/reaction-section.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {

  @Input()
  comment: UCommentSectionCommentFragment | ACommentSectionCommentFragment;

  @Input()
  isLoggedIn: boolean;

  @Output() toggleReaction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  get myReactions(): CommonReaction[] {
    return (this.comment as UCommentSectionCommentFragment).myReactions ?? [];
  }
}
