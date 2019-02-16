import {Component} from "@angular/core";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  get accessToken(): string {
    return this.loginService.accessToken;
  }

  isLoggedIn() {
    return !!this.loginService.accessToken;
  }

  redirectToLogin() {
    this.loginService.redirectToLogin();
  }
}
