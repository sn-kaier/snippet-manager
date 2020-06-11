import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authProviderList = ['google'];

  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.error(event);
  }

  constructor(readonly authService: AuthService) { }

  ngOnInit(): void {
  }

}
