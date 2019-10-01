import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Flickity from 'flickity';
import '../../../node_modules/flickity/css/flickity.css';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit, AfterViewInit {
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
    },
    {
      pathImg: '../../assets/img/netgift.png',
      logo: '../../assets/img/logo-netgift.png',
      alt: 'netgift'
    },
    {
      pathImg: '../../assets/img/paschoalotto.png',
      logo: '../../assets/img/logo-paschoalotto.png',
      alt: 'paschoalotto'
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.galleryProjects();
  }

  galleryProjects() {
    let galleryElement = this.gallery.nativeElement;
    let flkty = new Flickity( galleryElement, {
      imagesLoaded: true,
      percentPosition: false,
    });

    let imgs = galleryElement.querySelectorAll('.portfolio-element .portfolio-img');
    let docStyle = document.documentElement.style;
    let transformProp = typeof docStyle.transform === 'string' ?
    'transform' : 'WebkitTransform';

    flkty.on( 'scroll', () => {
      flkty.slides.forEach( ( slide, i ) => {
        let img = imgs[i];
        let x = ( slide.target + flkty.x ) * -1 / 4;
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
      });
    });
  }

}
