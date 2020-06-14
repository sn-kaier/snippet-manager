import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UCommentSectionCommentFragment } from '../../../../__generated/user-gql-services';
import { ACommentSectionCommentFragment } from '../../../../__generated/anonymous-gql-services';
import { CommonReaction } from '../../reaction-section/reaction-section.component';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {
  @Input()
  comment: UCommentSectionCommentFragment | ACommentSectionCommentFragment;

  @Output() toggleReaction = new EventEmitter<string>();
  @Output() deleteComment = new EventEmitter();
  @Output() editComment = new EventEmitter<string>();

  isMenuOpen = false;
  editMode = false;
  commentEditText: string;

  constructor(public readonly authService: AuthService) {}

  ngOnInit(): void {}

  get myReactions(): CommonReaction[] {
    return (this.comment as UCommentSectionCommentFragment).myReactions ?? [];
  }

  get isAuthor(): boolean {
    const authId = this.authService.authId;
    return authId && authId === (this.comment as UCommentSectionCommentFragment).author?.authId;
  }

  menuOpened() {
    this.isMenuOpen = true;
  }

  menuClosed() {
    this.isMenuOpen = false;
  }

  enterEditMode() {
    this.commentEditText = this.comment.comment;
    this.editMode = true;
  }

  cancelEditMode() {
    this.editMode = false;
  }

  saveEditComment() {
    this.editMode = false;

    this.editComment.emit(this.commentEditText);
  }
}
