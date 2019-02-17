import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public accessToken: string;

  constructor(
    private router: Router
  ) { }

  public redirectToLogin() {
    window.location.href = "https://bitbucket.org/site/oauth2/authorize?client_id=22Nw88AezgdVaTurC6&response_type=token"
  }

  public login(accessToken: string) {
    let redirectAfterLogin = window.localStorage.getItem('redirectAfterLogin');

    if (redirectAfterLogin) {
      this.router.navigate([redirectAfterLogin]);

      window.localStorage.setItem('redirectAfterLogin', null);
    }

    this.accessToken = accessToken;
  }
}
