import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Output()
  addComment = new EventEmitter<string>();

  commentText = '';

  focused = false;

  constructor(readonly authService: AuthService) {}

  ngOnInit(): void {}

  resetText() {
    this.commentText = '';
    this.focused = false;
  }

  toggleFocus(focus: FocusEvent) {
    this.focused = true;
  }

  send() {
    this.addComment.emit(this.commentText);
    this.resetText();
  }

  onKeyDown(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.ctrlKey && keyboardEvent.code === 'Enter') {
      this.send();
    }
  }
}
