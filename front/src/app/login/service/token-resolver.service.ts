import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class TokenResolverService implements Resolve<string> {

  constructor (
    private loginService: LoginService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {

    let urlParams = new URLSearchParams(route.fragment);
    let accessToken = urlParams.get('access_token');

    console.log('Resolved ', accessToken);

    if(accessToken){
      this.loginService.login(accessToken);
    }

    return accessToken;
  }
}
