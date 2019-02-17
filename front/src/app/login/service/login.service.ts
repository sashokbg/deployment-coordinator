import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public accessToken: string;

  constructor(
    private router: Router
  ) { }

  public redirectToLogin() {
    console.log('Sending client to bitbucket');
    window.location.href = "https://bitbucket.org/site/oauth2/authorize?client_id=" + environment.clientId + "&response_type=token"
  }

  public login(accessToken: string) {
    console.log('Received accessToken ', accessToken);
    let redirectAfterLogin = window.localStorage.getItem('redirectAfterLogin');

    if (redirectAfterLogin) {
      console.log('Redirecting after login to ', redirectAfterLogin);
      this.router.navigate([redirectAfterLogin]);

      window.localStorage.removeItem('redirectAfterLogin');
    }

    this.accessToken = accessToken;
  }
}
