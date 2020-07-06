import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AFeedDocLabelFragment } from '../../__generated/anonymous-gql-services';
import { UFeedDocLabelFragment } from '../../__generated/user-gql-services';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent implements OnInit {

  @Input() label: AFeedDocLabelFragment | UFeedDocLabelFragment;
  constructor() { }

  ngOnInit(): void {
  }

}
