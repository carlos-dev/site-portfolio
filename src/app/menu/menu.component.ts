import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('title') menu: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  openMenu(element) {
    console.log(this.menu)
    element.target.classList.add('active');
  }
}
