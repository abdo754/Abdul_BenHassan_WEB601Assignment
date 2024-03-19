import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-file/content-interface';
import { contentArray } from '../helper-file/contentDb'; // Ensure the path is correct
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private messagesService: MessagesService) {}

  // In your method to get the content array
  getContentArray(): Observable<Content[]> {
    this.messagesService.addMessage('Content array loaded!');
    return of(contentArray);
  }

  // In your method to get content by ID
  getContentById(id: number): Observable<Content | undefined> {
    this.messagesService.addMessage(`Content Item at id: ${id}`);
    const contentItem = contentArray.find(item => item.id === id);
    return of(contentItem);
  }
}
