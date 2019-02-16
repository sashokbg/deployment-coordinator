import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public accessToken: string;

  constructor(
  ) { }

  public redirectToLogin() {
    window.location.href = "https://bitbucket.org/site/oauth2/authorize?client_id=22Nw88AezgdVaTurC6&response_type=token"
  }

  public login(accessToken: string) {
    this.accessToken = accessToken;
  }
}
