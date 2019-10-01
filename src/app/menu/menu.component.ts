import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.openMenu();
    this.setMainActive();
  }


  openMenu() {
    const btnOpenMenu = document.querySelector('.open-menu');

    btnOpenMenu.addEventListener('click', () => {
      btnOpenMenu.classList.toggle('active');
      document.querySelector('#menu').classList.toggle('active');
      document.querySelector('main').classList.toggle('active');
    });
  }

  setMainActive() {
    const navLink = document.querySelector('.nav-link');

    navLink.addEventListener('click', () => {
      if (document.querySelector('#menu').classList.contains('active')) {
        document.querySelector('main').classList.add('active');
      } else {
        document.querySelector('main').classList.remove('active');
      }
    });
  }
}
