import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UFeedDocAuthorFragment, UFeedDocAuthorFragmentDoc } from '../../../__generated/user-gql-services';
import { AuthService } from '../../../core/auth.service';
import { AFeedDocAuthorFragment } from '../../../__generated/anonymous-gql-services';

@Component({
  selector: 'app-author-section',
  templateUrl: './author-section.component.html',
  styleUrls: ['./author-section.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorSectionComponent implements OnInit {

  @Input() publishedDate: string;
  @Input() author: UFeedDocAuthorFragment | AFeedDocAuthorFragment;

  constructor(readonly authService: AuthService) {
  }

  ngOnInit(): void {
  }

  get isOwnDocument(): boolean {
    return (this.author as UFeedDocAuthorFragment)?.authId === this.authService.authState.getValue()?.userId;
  }
}
