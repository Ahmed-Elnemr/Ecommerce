import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BorderBox]'
})
export class BorderBoxDirective implements OnChanges {
  // document.getElementByID().style.border
// private elem:ElementRef;

// property decorator
@Input() hoverColor:string="Yellow";
@Input('BorderBox') defaultColor:string="darkblue";
constructor(private elem:ElementRef) {

}
  ngOnChanges(): void {
    this. elem.nativeElement.style.border =`2px solid ${this.defaultColor}`;
  }

// Events
// decorator method
@HostListener('mouseover') onMouseOverFunc(){
this.elem.nativeElement.style.border =`3px dashed ${this.hoverColor}`;
}
@HostListener('mouseout') onMouseOutFunc(){
  this.elem.nativeElement.style.border =`3px solid ${this.defaultColor}`;
  }
}
