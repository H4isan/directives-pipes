import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';
@Directive({
  selector: '[appDirectiveEvent]'
})
export class DirectiveEventDirective {

  constructor(public elementRef: ElementRef, public renderer: Renderer) { }
  @HostListener('mouseover') onmouseover(){
    this.elementRef.nativeElement.className = "makemeBig";
    console.log(this.elementRef);
    
  }
  @HostListener('mouseout') onmouseout(){
    this.renderer.setElementClass(this.elementRef.nativeElement, 'makemeBig', false);
    console.log(this.elementRef);
    
  }
}
