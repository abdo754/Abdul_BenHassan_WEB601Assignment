import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messagesSubject = new BehaviorSubject<string[]>([]);
  messages$ = this.messagesSubject.asObservable(); // For components to subscribe

  constructor() { }

  addMessage(message: string): void {
    this.messagesSubject.next([...this.messagesSubject.value, message]);
  }

  clearMessages(): void {
    this.messagesSubject.next([]);
  }
}
