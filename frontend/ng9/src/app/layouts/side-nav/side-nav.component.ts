import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() navigationClicked = new EventEmitter<void>();

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.logout().then(() => {
      this.navigationClicked.emit();
    });
  }
}
