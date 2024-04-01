import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SheetPage } from '../sheet/sheet.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private modalCtrl: ModalController,     // componente modal de ionic
  ) {}

  // adding shorts
  // cuando presiono el evento click, se abre un modal controlller
  async add() {

    // se crea el modal
    const modal = await this.modalCtrl.create({
			component: SheetPage,   // necesita un componente
			breakpoints: [0.5],
			initialBreakpoint: 0.5,
			handle: false
		});

    // se abre el modal
		await modal.present();
  }
}


