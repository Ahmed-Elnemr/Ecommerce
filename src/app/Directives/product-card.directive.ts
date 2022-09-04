import { asNativeElements, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(public prd:ElementRef) {
    prd.nativeElement.style.borderRadius ='10px';
    prd.nativeElement.style.boxShadow='-1px 1px 9px 2px rgba(0,0,0,0.90)';
   }
   @HostListener('mouseover') onmouseOver(){
    this.prd.nativeElement.style.borderRadius = '10px';
    this.prd.nativeElement.style.boxShadow = '-1px 1px 15px 5px rgba(0,0,0,0.90)';
  }
  @HostListener('mouseout') onmouseOut(){
    this.prd.nativeElement.style.borderRadius = '10px';
    this.prd.nativeElement.style.boxShadow = '-1px 1px 9px 2px rgba(0,0,0,0.90)';
  }

}
