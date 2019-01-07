import { Injectable } from '@angular/core';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs';
import { Message } from './MessageModel';
const CLIENT_API ="763d592260884be894ea224f8129b993";
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

readonly client = new ApiAiClient({accessToken:CLIENT_API})
conversation =  new BehaviorSubject<Message[]>([])
  constructor() {

   }

   update(message:Message){
     this.conversation.next([message])
   }

   sendAndReceive(message){
     this.update({'type':'user','message':message});
     this.client.textRequest(message).then(response=>{
       const reply  =  response.result.fulfillment.speech;
       this.update({'type':'bot','message':reply})
     })
   }

}
