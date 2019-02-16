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

    console.log('Resolved ', urlParams.get('access_token'));

    this.loginService.login(urlParams.get('access_token'));

    return urlParams.get('access_token');
  }
}
