import {Component} from "@angular/core";
import {LoginService} from "../service/login.service";

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private loginService: LoginService
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
