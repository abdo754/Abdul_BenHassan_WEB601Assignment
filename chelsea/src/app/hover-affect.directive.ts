import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[hoverAffect]'
})
export class HoverAffectDirective {
  @Input('hoverAffect') styleChange!: string;


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.adjustStyle(this.styleChange, true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.adjustStyle(this.styleChange, false);
  }

  private adjustStyle(style: string, apply: boolean) {
    if (style === 'underline') {
      this.el.nativeElement.style.textDecoration = apply ? 'underline' : 'none';
    } else if (style === 'bold') {
      this.el.nativeElement.style.fontWeight = apply ? 'bold' : 'normal';
    }
  }
}
