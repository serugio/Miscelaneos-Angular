import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {
  
  loading:boolean = false;
  alert:string ="alert-danger";
  propiedades: Object = {
    danger: false
  }
  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;
    setTimeout( () => this.loading = false, 3000  );
  }

}
