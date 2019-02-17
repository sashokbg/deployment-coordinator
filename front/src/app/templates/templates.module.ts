import {NgModule} from "@angular/core";
import {MainTemplateComponent} from "./main-template/main-template.component";
import {AppRoutingModule} from "../app-routing.module";
import {CommonModule} from "../common/common.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    MainTemplateComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    MainTemplateComponent
  ]
})
export class TemplatesModule { }
