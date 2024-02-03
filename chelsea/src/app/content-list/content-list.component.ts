import { Component } from '@angular/core';
import {Content} from '../helper-file/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentArray: Content[]=[
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
    },
    {
    id: 4,
    title: 'the best fan ',
    description: 'the biggest fan',
    creator: 'Abdulrhman',
    imgURL: 'https://img.bleacherreport.net/img/images/photos/002/449/799/hi-res-174199086_crop_exact.jpg?w=3072&h=2048&q=75'
    },
    {
    id: 5,
    title: 'our best manger ',
    description: 'this manger is the best manger the world have seen and also the club ',
    creator: 'Abdulrhman',
    imgURL: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7ca525d8c2bf76fc/642ea073750ccab23a3459fe/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-06T113101.795.png?auto=webp&format=pjpg&width=3840&quality=60'
    },
    {
    id: 6,
    title: 'our youngest player of the year ',
    description: 'this player is on the youngest player in the team and he have already affect the team in the best way possblie ',
    creator: 'Abdulrhman',
    imgURL: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1948385e6a9322dd/656c88f142f5a7040a9857e4/GOAL_-_Blank_WEB_-_Facebook_-_2023-12-03T135539.911.png?auto=webp&format=pjpg&width=3840&quality=60'
    },
    {
      id: 7,
      title: 'our top score of all time',
      description: 'this player has the most goals for our team and his one of the best player too  ',
      creator: 'Abdulrhman',
      imgURL: 'https://m.media-amazon.com/images/M/MV5BNmU1NzhkODYtZWQwMC00YzNkLTlhNDgtOWRmNWE2ZDI4Y2ZiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg'
      }

  ];
  constructor() { }

  displayContentIdAndTitle(content: Content, event: MouseEvent): void {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
    event.stopPropagation();
  }
}

