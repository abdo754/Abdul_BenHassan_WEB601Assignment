import { Component, Input } from '@angular/core';
import { Content } from '../helper-file/content-interface'; // Ensure this path matches the location of your Content interface

@Component({
  selector: 'app-content-card', // The selector to use this component in HTML
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'] // Link to the styles
})
export class ContentCardComponent {
  @Input() content!: Content; // Expects a Content object from the parent component
  @Input() isFirst!: boolean; // Determines if this card is the first in the list for special styling

  displayContentIdAndTitle(content: Content, event: MouseEvent): void {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
    event.stopPropagation(); // Prevents the event from propagating to parent elements
  }
}
