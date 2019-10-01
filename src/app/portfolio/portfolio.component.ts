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
    this.galleryProjects();
  }

  galleryProjects() {
    let galleryElement = this.gallery.nativeElement;
    let flkty = new Flickity( galleryElement, {
      imagesLoaded: true,
      percentPosition: false,
    });

    let imgs = galleryElement.querySelectorAll('.portfolio-element img');
    let docStyle = document.documentElement.style;
    let transformProp = typeof docStyle.transform === 'string' ?
    'transform' : 'WebkitTransform';
    console.log(transformProp)

    flkty.on( 'scroll', () => {
      flkty.slides.forEach( ( slide, i ) => {
        let img = imgs[i];
        let x = ( slide.target + flkty.x ) * -1 / 3;
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
      });
    });
  }

}
