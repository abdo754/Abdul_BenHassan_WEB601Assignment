import { Component } from '@angular/core';
import {Content} from '../helper-file/content-interface';
import { contentArray } from '../helper-file/contentDb';
import { SportsService } from '../services/sports.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentArray: Content[] = [];
  searchTitle: string = '';
  searchMessage: string = '';
  searchMessageColor: string = 'black';
  highlightedContentIndex: number = -1;

  constructor(private sportsService: SportsService) {}

  ngOnInit(): void {
    this.sportsService.getContentArray().subscribe((data: Content[]) => {
      this.contentArray = data;
    });
  }

  searchContent(): void {
    const foundIndex = this.contentArray.findIndex(
      (content) => content.title.toLowerCase() === this.searchTitle.toLowerCase()
    );
    if (foundIndex !== -1) {
      this.searchMessage = 'Content item exists.';
      this.searchMessageColor = 'green';
      this.highlightedContentIndex = foundIndex;
    } else {
      this.searchMessage = 'Content item does not exist.';
      this.searchMessageColor = 'red';
      this.highlightedContentIndex = -1;
    }
  }

  addNewContent(newContent: Content): void {
    const clonedContent = { ...newContent };
    this.contentArray.push(clonedContent);
  }
}
