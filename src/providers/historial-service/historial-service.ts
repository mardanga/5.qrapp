import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ScanData } from "../../models/scan-data.model";


@Injectable()
export class HistorialServiceProvider {

  historial:ScanData[] = [];

  constructor() {
   
  }

  guardarHistorial(texto:string){
    let sc = new ScanData(texto);
    this.historial.unshift(sc);
    console.log(this.historial);
  }

  cargarHistorial(){
    return this.historial;

  }

}
