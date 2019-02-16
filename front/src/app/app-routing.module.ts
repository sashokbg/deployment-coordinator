import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainTemplateComponent} from "./templates/main-template/main-template.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {TokenResolverService} from "./login/service/token-resolver.service";
import {RepositoriesPageComponent} from "./repositories/repositories-page/repositories-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
        resolve: {
          accessToken: TokenResolverService
        }
      },
      {
        path: 'repositories',
        component: RepositoriesPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
