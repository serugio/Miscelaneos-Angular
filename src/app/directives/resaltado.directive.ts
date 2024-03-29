import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef ) {
   
   }

   @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter') mouseEntra(){
    this.resaltar(this.nuevoColor || 'yellow');
   }

   @HostListener('mouseleave') mouseSale(){
    this.resaltar(null);
   }

   private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
   }


  
}
