import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgHighlight]'
})
export class NgHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const allButtons = document.querySelectorAll('[appNgHighlight]');
    allButtons.forEach(button => {
      this.renderer.removeClass(button, 'highlighted');
    });
    
    this.renderer.addClass(this.elementRef.nativeElement, 'highlighted');
  }
}

