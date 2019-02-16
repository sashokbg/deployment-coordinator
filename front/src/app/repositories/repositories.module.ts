import {NgModule} from "@angular/core";
import {RepositoriesPageComponent} from "./repositories-page/repositories-page.component";

@NgModule({
  declarations: [
    RepositoriesPageComponent
  ],
  exports: [
    RepositoriesPageComponent
  ]
})
export class RepositoriesModule {

}
