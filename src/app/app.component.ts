import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from './chat-service.service';
import { Message } from './MessageModel';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() :void{
this.messageArray =  this.service.conversation.asObservable()
.scan((acc,val)=>
  acc.concat(val)
)

}
disable = true;
message = "";
messageArray:Observable<Message[]>
  constructor(private service:ChatServiceService){

  }

send(){
  this.service.sendAndReceive(this.message)
  this.message = ""
}



}
