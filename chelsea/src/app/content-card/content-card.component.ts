// this is what display on th web

import { Component } from '@angular/core';
import { Content } from '../helper-file/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentArray: Content[] = [
    {
      id: 1,
      title: 'Best Player',
      description: 'Best player in history',
      creator: 'Abdulrhman',
      imgURL: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_4:3,f_auto,q_auto,g_auto/shape/cover/sport/uncropped-fbl-eur-c3-chelsea-arsenal-final-5e49332b164c41490c000003.jpg'
    },
    {
      id: 2,
      title: 'Best Year',
      description: 'The best year for the teams as 2020',
      creator: 'Abdulrhman',
      imgURL: 'https://i.guim.co.uk/img/media/eb6caf6db81be662905ee1230f1eddc6a9831624/0_206_5472_3283/master/5472.jpg?width=1200&quality=85&auto=format&fit=max&s=15d5499cddd47677ee458014fffd01bc'
    },
    {
      id: 3,
      title: 'The Stadium',
      description: 'The home of Chelsea',
      creator: 'Abdulrhman',
      imgURL: 'https://arquitecturaviva.com/assets/uploads/obras/40781/av_thumb__av_imagen.webp'
    }
  
  ];

  constructor() {}
}
