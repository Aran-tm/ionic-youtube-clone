import { Directive } from '@angular/core';

@Directive({
  selector: '[appHideHeader]',
  standalone: true
})
export class HideHeaderDirective {

  constructor() { }

}
