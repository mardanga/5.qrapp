import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
 
  
})

export class MapaPage {

lat: number;
lng: number;

  constructor(public navParams: NavParams) 
  {
    this.lat= -34.442345;
    this.lng= -58.934602;
  }

  ionViewDidLoad() {
    
  }

}
