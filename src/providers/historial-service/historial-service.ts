import { MapaPage } from './../../pages/mapa/mapa';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ScanData } from "../../models/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from "ionic-angular";

@Injectable()
export class HistorialServiceProvider {

  historial:ScanData[] = [];

  constructor(private iab: InAppBrowser, private modalCtr:ModalController) {
   
  }

  guardarHistorial(texto:string){
   // console.log(texto);
    let sc = new ScanData(texto);
    this.historial.unshift(sc);
    this.abrirScan(0);
  }

  cargarHistorial(){
    return this.historial;
  }

  abrirScan(index:number){
    let scanData = this.historial[index];

    switch(scanData.tipo)
    {
      case "Http":
        this.iab.create(scanData.texto);
      break;
      case "Mapa":
        let modal = this.modalCtr.create(MapaPage,{coords: scanData.texto}).present();

      break;

    }
    
  }

}
