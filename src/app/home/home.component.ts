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
    this.animeSvg();
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
        { value: 'M 29.033898,176.18136 C 22.933898,158.48136 35.7,154.1 30.3,139.3 22.3,117.4 63.949153,131.07288 83.949153,118.57288 103.44915,106.27288 83.8,77.7 118.7,68.8 145.2,62 148.66102,19.391525 173,43.4 c 12,-2.8 14.55254,41.654237 33.35254,57.85424 19,16.4 33.78475,9.66949 33.08475,19.86949 27.58813,13.03729 38.51356,12.07627 39.41356,32.97627 1,22.5 -27.85085,25.8 -29.95085,42.6 -2.2,17.6 3.22542,57.02542 -13.97458,60.32542 -22,4.1 -47.70508,9.32882 -73.20508,9.12882 -31,-0.2 -21.27458,-31.77966 -48.77458,-35.07966 C 95.645763,229.07458 60,230.8 54.9,215.8 48.9,198.6 35.833898,195.88136 29.033898,176.18136 Z'
        }
      ],
      duration: 3000,
      direction: 'alternate',
      autoplay: true,
      easing: 'easeInOutExpo',
      elasticity: 10,
      loop: true
    });
  }
}
