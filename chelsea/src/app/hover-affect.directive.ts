import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[hoverAffect]'
})
export class HoverAffectDirective {
  @Input('hoverAffect') styleChange!: string;
  @Input() isSpecialCard: boolean = false;



  constructor(private el: ElementRef) { }

  // when the mouse is on the element

  @HostListener('mouseenter') onMouseEnter() {
    this.adjustStyle(this.styleChange, true);
  }
  // when the mouse is leave the element

  @HostListener('mouseleave') onMouseLeave() {
    this.adjustStyle(this.styleChange, false);
  }


  // depond on the stylechange turn in to (make element if is true/false)
  private adjustStyle(style: string, apply: boolean) {
    if (style === 'underline') {
      this.el.nativeElement.style.textDecoration = apply ? 'underline' : 'none';
    } else if (style === 'bold') {
      this.el.nativeElement.style.fontWeight = apply ? 'bold' : 'normal';
    } else if (this.isSpecialCard && style === 'border') {
      this.el.nativeElement.style.border = apply ? '2px solid #yourBorderColor' : '';  // Adjust as needed
    }
  }
}
