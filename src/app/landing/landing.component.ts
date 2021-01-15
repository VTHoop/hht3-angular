import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('showHide', [
      // ...
      state('show', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('hide', style({
        transform: 'translateY(-230%)',
        opacity: 0
      })),
      transition('show => hide', [
        animate('.3s')
      ]),
      transition('hide => show', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class LandingComponent implements OnInit {
  showLogin = false;

  constructor() {}

  ngOnInit() {}
}
