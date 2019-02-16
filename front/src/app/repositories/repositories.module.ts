import {NgModule} from "@angular/core";
import {RepositoriesPageComponent} from "./repositories-page/repositories-page.component";
import {RepositoriesService} from "./service/repositories.service";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    RepositoriesPageComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    RepositoriesPageComponent
  ],
  providers: [
    RepositoriesService
  ]
})
export class RepositoriesModule {

}
