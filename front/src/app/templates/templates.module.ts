import {NgModule} from "@angular/core";
import {MainTemplateComponent} from "./main-template/main-template.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    MainTemplateComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    MainTemplateComponent
  ]
})
export class TemplatesModule { }
