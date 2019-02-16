import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../../login/service/login.service";

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {
  }

  findAllRepos() {
    return this.httpClient.get('https://api.bitbucket.org/2.0/repositories/tigf_sqli_star', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.loginService.accessToken}`
      })
    })
  }
}
