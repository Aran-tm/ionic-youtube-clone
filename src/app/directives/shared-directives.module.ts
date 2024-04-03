import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';

@NgModule({
	imports: [CommonModule, HideHeaderDirective],
	exports: [HideHeaderDirective]
})
export class SharedDirectivesModule {}
