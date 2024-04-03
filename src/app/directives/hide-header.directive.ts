import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

enum Direction {
  dowup = 1,
  down = 0,
}

@Directive({
  selector: '[appHideHeader]',
  standalone: true
})
export class HideHeaderDirective {
  @Input('appHideHeader') header: any;
  previousY = 0;
  direction: Direction = Direction.down;
  saveY = 0;

  constructor(
    private renderer: Renderer2,
		private domCtrl: DomController,
		private elRef: ElementRef,
		@Inject(DOCUMENT) private document: Document
  ) { }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {

    console.log($event);
  }

}
