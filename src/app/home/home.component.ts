import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import anime from '../../../node_modules/animejs/lib/anime.es.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('title') textWrapper: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.animeText();
    //this.animeSvg();
  }

  animeText() {
    // tslint:disable-next-line: max-line-length
    this.textWrapper.nativeElement.innerHTML = this.textWrapper.nativeElement.textContent.replace(/([^\x00-\x80]|\w)/g, '<span class=\'letter\'>$&</span>');

    anime.timeline({loop: false}).add({
      targets: '.title .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay(el, i) {
        return 45 * i;
      }
    });
  }

  animeSvg() {
    anime({
      targets: '.svg-morph path',
      d: [
        // tslint:disable-next-line: max-line-length
        { value: 'm 63.90566,190.31887 c -6.1,-17.7 -35.677358,-21.27547 -41.077358,-36.07547 -8,-21.9 4.096226,-54.939626 24.096226,-67.439626 20.858491,-22.48868 31.661026,-0.856746 69.058492,-10.192453 6.46226,-19.026415 19.16792,-24.673585 47.16792,-31.173585 12,-2.8 33.58868,13.833962 52.38868,30.033962 19,16.4 34.36038,22.028302 33.66038,32.228302 -1.7,22.8 -26.60189,4.78302 -25.70189,25.68302 1,22.5 29.87925,40.7434 27.77925,57.5434 -2.2,17.6 -7.80944,61.6132 -25.00944,64.9132 -22,4.1 -76.26792,-28.85283 -101.76792,-29.05283 -31,-0.2 -10.57358,48.84906 -38.073585,50.30378 -17.3,-2 -46.803773,-6.55472 -51.903773,-21.55472 -6,-17.2 36.183018,-45.51698 29.383018,-65.21698 z'
        }
      ],
      duration: 5000,
      direction: 'alternate',
      autoplay: true,
      easing: 'linear',
      elasticity: 100,
      loop: true
    });
  }
}
