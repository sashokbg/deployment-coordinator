import {NgModule} from "@angular/core";
import {FlashMessagesComponent} from "./flash-messages/flash-messages.component";
import {FlashMessagesService} from "./service/flash-messages.service";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    FlashMessagesComponent
  ],
  exports: [
    FlashMessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FlashMessagesService
  ]
})
export class CommonModule {

}
