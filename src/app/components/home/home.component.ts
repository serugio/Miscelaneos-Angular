import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>Demos <small>angular</small> </h1>
  <hr>
  <app-ng-style></app-ng-style>

  <app-css></app-css>

  <app-clases></app-clases>
  <p [appResaltado]="'orange'">
      hola mundo
  </p>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
