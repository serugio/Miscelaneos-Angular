import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano" >
      hola mundo ... etieueta
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5"  >
    <i class="fas fa-plus"> </i>
    </button>

    <button class="btn brn-primary" (click)="tamano = tamano - 5"  >
    <i class="fas fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  
  tamano:number = 10;
  constructor() { }

  ngOnInit() {
  }

}
