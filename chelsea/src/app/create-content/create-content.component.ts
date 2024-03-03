import { Component } from '@angular/core';
import { Content } from '../helper-file/content-interface'; // Ensure this path matches your project structure

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent: Content = {
    id: 0, // Initialized to 0 as a placeholder
    title: '',
    description: '',
    creator: '',
    imgURL: ''
  };

  errorMessage: string = '';

  createContent() {
    this.addContent(this.newContent).then((title) => {
      console.log(`Addition successful: ${title}`);
      this.clearForm();
      this.errorMessage = ''; // Clear any existing error message
    }).catch((error) => {
      this.errorMessage = 'Content failed to be added.';
    });
  }

  addContent(content: Content): Promise<string> {
    return new Promise((resolve, reject) => {
      // Simulate an API call with setTimeout
      setTimeout(() => {
        if (content.title) { // Assuming 'title' is mandatory for a successful addition
          resolve(content.title);
        } else {
          reject('Failed to add content'); // Reject the promise if some condition isn't met
        }
      }, 1000); // Simulate a delay for async operation
    });
  }

  clearForm() {
    this.newContent = {
      id: 0, // Reset 'id' to 0 or any placeholder value
      title: '',
      description: '',
      creator: '',
      imgURL: ''
    };
  }
}
