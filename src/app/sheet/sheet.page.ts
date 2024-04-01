import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
})
export class SheetPage implements OnInit {

  items = [
    {
      text: 'Create a Short',
      icon: 'videocam-outline',
    },
    {
      text: 'Upload a Video',
      icon: 'push-outline',
    },
    {
      text: 'Go Live',
      icon: 'radio-outline',
    },
    {
      text: 'Add to your Story',
      icon: 'add-circle-outline',
    },
    {
      text: 'Create a Post',
      icon: 'create-outline',
    },
  ];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  // cierra el modal controller
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
