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

  teste() {
    console.log(this.textWrapper);
    this.textWrapper.nativeElement.innerHTML = this.textWrapper.nativeElement.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: function(el, i) {
      return 45 * i;
    }
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }
  ngOnInit() {
  }
}
