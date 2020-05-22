import { Component, Input, OnInit } from '@angular/core';
import { UCommentSectionCommentFragment } from '../../../../__generated/user-gql-services';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: UCommentSectionCommentFragment;

  @Input()
  isLoggedIn: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
