import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ScanData } from "../../models/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialServiceProvider {

  historial:ScanData[] = [];

  constructor(private iab: InAppBrowser) {
   
  }

  guardarHistorial(texto:string){
    let sc = new ScanData(texto);
    this.historial.unshift(sc);
    //console.log(this.historial);
    this.abrirScan(0);
  }

  cargarHistorial(){
    return this.historial;
  }

  abrirScan(index:number){
    let scanData = this.historial[index];
    this.iab.create(scanData.texto);
  }

}
