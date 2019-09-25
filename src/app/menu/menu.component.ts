import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.openMenu();
  }


  openMenu() {
    let btnOpenMenu = document.querySelector('.open-menu');

    btnOpenMenu.addEventListener('click', () => {
      btnOpenMenu.classList.toggle('active');
      document.querySelector('#menu').classList.toggle('active');
    });
  }
}
