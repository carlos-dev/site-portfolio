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
  }

  openMenu(element) {
    console.log(this.menu);
    element.target.classList.add('active');
    this.showMenu();
  }

  showMenu() {
    document.querySelector('#menu').classList.add('active');
  }
}
