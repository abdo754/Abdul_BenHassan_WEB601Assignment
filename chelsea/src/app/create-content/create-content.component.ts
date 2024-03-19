import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-file/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    imgURL: ''
  };

  //allow the content to be send out
  @Output() contentAdded = new EventEmitter<Content>();
  errorMessage: string = ''; // This property is correctly declared to hold error messages.

  createContent() {
    if (this.validateContent(this.newContent)) { // Adding a validation step before emitting the content
      this.contentAdded.emit({ ...this.newContent, id: Date.now() }); // Emit a copy with a new ID
      this.clearForm(); // Clear the form fields
    } else {
      this.errorMessage = 'Please fill in all required fields'; // Show an error message if validation fails
    }
  }

  // Utility method to validate content
  validateContent(content: Content): boolean {
    return content.title.trim().length > 0; // Basic validation to ensure the title is not empty
  }

  // Utility method to clear the form
  clearForm() {
    this.newContent = { id: null, title: '', description: '', creator: '', imgURL: '' };
    this.errorMessage = ''; // Also clear any existing error message
  }
} 
