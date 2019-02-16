import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public accessToken: string;

  constructor(
    private httpClient: HttpClient
  ) {}

  public login(accessToken: string) {
    this.accessToken = accessToken;
  }
}
