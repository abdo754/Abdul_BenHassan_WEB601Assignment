import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.scss'
})
export class AppMessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }
   
  clearMessages(): void {
    this.messagesService.clearMessages();
  }
}
