import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-reaction-button',
  templateUrl: './add-reaction-button.component.html',
  styleUrls: ['./add-reaction-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddReactionButtonComponent implements OnInit {

  @Input()
  width = 22;

  @Input()
  color = 'purple';

  constructor() {
  }

  ngOnInit(): void {
  }

}
