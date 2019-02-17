import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FlashMessagesService {

  messages = [];

  postFlashMessage(message: string) {
    console.log('Received message');
    this.messages.push(message)
  }
}
