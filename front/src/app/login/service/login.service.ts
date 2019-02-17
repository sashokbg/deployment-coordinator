import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {FlashMessagesService} from "../../common/service/flash-messages.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public accessToken: string;

  constructor(
    private router: Router,
    private messageService: FlashMessagesService
  ) { }

  public redirectToLogin() {
    console.log('Sending client to bitbucket');
    window.location.href = "https://bitbucket.org/site/oauth2/authorize?client_id=" + environment.clientId + "&response_type=token"
  }

  public login(accessToken: string) {
    console.log('Received accessToken ', accessToken);
    this.messageService.postFlashMessage('You have logged in message !');
    let redirectAfterLogin = window.localStorage.getItem('redirectAfterLogin');

    if (redirectAfterLogin) {
      console.log('Redirecting after login to ', redirectAfterLogin);
      this.router.navigate([redirectAfterLogin]);

      window.localStorage.removeItem('redirectAfterLogin');
    }

    this.accessToken = accessToken;
  }
}
