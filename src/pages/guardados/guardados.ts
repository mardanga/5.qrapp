import { HistorialServiceProvider } from './../../providers/historial-service/historial-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanData } from "../../models/scan-data.model";



@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial:ScanData[]= [];

  constructor(private historialSrv: HistorialServiceProvider) {
  }

  ionViewDidLoad() {
    this.historial = this.historialSrv.cargarHistorial();
  }

  abrirScan(index:number){
    this.historialSrv.abrirScan(index);
  }

}
