import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
 
  
})

export class MapaPage {

lat: number;
lng: number;

  constructor(public navParams: NavParams, private viewCtrl:ViewController) 
  {
    //this.lat= -34.442345;
    //this.lng= -58.934602;

    let data = this.navParams.get("coords").split(",");
    console.log(data);
    this.lat = Number( data[0].replace("geo:",""));
    console.log(this.lat);
    this.lng = Number(data[1]);
    console.log(this.lng);

  }

  ionViewDidLoad() {
    
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }
}
