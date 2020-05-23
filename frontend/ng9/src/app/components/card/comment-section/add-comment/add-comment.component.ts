import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/auth.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.less']
})
export class AddCommentComponent implements OnInit {

  constructor(readonly authService: AuthService) { }

  ngOnInit(): void {
  }

}
