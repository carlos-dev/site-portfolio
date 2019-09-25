import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {}

  @ViewChild('menu') menu: ElementRef;

  ngOnInit() {
    console.log(document.querySelector('#menu'));
    this.openMenu();
  }


  openMenu() {
    console.log(this.menu);
    let btnOpenMenu = document.querySelector('.open-menu');
    btnOpenMenu.addEventListener('click', function() {
      btnOpenMenu.classList.add('active');
      document.querySelector('#menu').classList.add('active');
    });
  }
}
