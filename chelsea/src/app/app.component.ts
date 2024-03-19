import { Component, OnInit } from '@angular/core';
import { Content } from './helper-file/content-interface';
import { SportsService } from './services/sports.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chelsea';
  featuredContent?: Content; // Property to hold the featured content item

  constructor(private sportsService: SportsService) {} // Inject the SportsService

  ngOnInit(): void {
    // Fetch the featured content item by ID (use the ID of your choice)
    this.sportsService.getContentById(1).subscribe(content => { // Assuming 1 is the ID you choose
      this.featuredContent = content;
    });
  }
}
