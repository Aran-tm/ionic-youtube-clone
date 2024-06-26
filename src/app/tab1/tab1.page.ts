import { Component } from '@angular/core';
import homeData from '../../assets/data/home.json';
import { RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  videos: any[] = [];
	segments: any[] = [];

  constructor() {
    this.segments = [
			'All',
			'New to you',
			'Gaming',
			'Sitcoms',
			'Computer program',
			'Documentary',
			'Music'
		].map((val) => ({
			title: val,
			selected: false
    }));
    console.log(this.segments);

    this.videos = homeData;

    // tiempo de espera para que aparezcan los videos
    //setTimeout(() => {
		//	this.selectSegment(0);
			//this.videos = homeData;
		//}, 1000);
  }

  // esta funcion es para seleccionar correctamente un segmento en el toolbar
  selectSegment(index: number) {

    this.segments.map((item) => (item.selected = false));
    this.segments[index].selected = true;
  }

  doRefresh(event: RefresherCustomEvent) {

    setTimeout(() => {
      event.target.complete();
    }, 1500)
  }

}
