import {NgModule} from '@angular/core';
import {LoginPageComponent} from "./login-page/login-page.component";
import {LoginService} from "./service/login.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AuthGuard} from "./service/auth.guard";

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  exports: [
    LoginPageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    LoginService,
    AuthGuard
  ]
})
export class LoginModule { }
