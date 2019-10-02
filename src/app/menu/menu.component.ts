import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('navLink') navLink: ElementRef;
  constructor() {}

  ngOnInit() {
    this.openMenu();
    this.setMainActive();
  }

  openMenu() {
    const btnOpenMenu = document.querySelector('.open-menu');

    btnOpenMenu.addEventListener('click', () => {
      if (!document.querySelector('#menu').classList.contains('active')) {
        btnOpenMenu.classList.add('active');
        document.querySelector('#menu').classList.add('active');
        document.querySelector('main').classList.add('active');
      } else {
        btnOpenMenu.classList.remove('active');
        document.querySelector('#menu').classList.remove('active');
        document.querySelector('main').classList.remove('active');
      }
    });
  }

  setMainActive() {
    this.navLink.nativeElement.addEventListener('click', () => {
      document.querySelector('main').classList.add('active');
      // if (document.querySelector('#menu').classList.contains('active')) {
      // } else {
      //   document.querySelector('main').classList.remove('active');
      // }
    });
  }
}
