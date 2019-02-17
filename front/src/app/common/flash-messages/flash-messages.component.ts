import {Component, OnInit} from "@angular/core";
import {FlashMessagesService} from "../service/flash-messages.service";

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-messages.component.html'
})
export class FlashMessagesComponent implements OnInit {
  messages = [];

  constructor(
    private messageService: FlashMessagesService
  ) { }

  ngOnInit(): void {
    console.log('subscribing ');

    this.messages = this.messageService.messages;
  }

  clear() {
    this.messages = [];
    this.messageService.messages = [];
  }
}
