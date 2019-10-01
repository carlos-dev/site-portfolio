import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Flickity from 'flickity';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('gallery') gallery: ElementRef;

  projects = [
    {
      pathImg: '../../assets/img/haytek.png',
      logo: '../../assets/img/logo-haytek.png',
      alt: 'haytek'
    },
    {
      pathImg: '../../assets/img/unicarioca.png',
      logo: '../../assets/img/logo-unicarioca.png',
      alt: 'unicarioca'
    }
  ];

  constructor() { 
    console.log(this.projects);
  }

  ngOnInit() {
    console.log(this.gallery);
  }

}
