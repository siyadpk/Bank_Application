import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private el:ElementRef) {

    el.nativeElement.style.backgroundColor='grey'
   }

}
