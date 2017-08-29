import { HistorialServiceProvider } from './../../providers/historial-service/historial-service';
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform: Platform,
              private historialSrv:HistorialServiceProvider
              ) {

  }
 
  scan(){
    console.log("Realizando scan");
    //if(this.platform.is('cordova')){
    if(this.platform.is('core')){
      //this.historialSrv.guardarHistorial("http://www.google.com");
      //this.historialSrv.guardarHistorial("geo:-34.442345,-58.934602");
      /* this.historialSrv.guardarHistorial(`BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD`); */
      this.historialSrv.guardarHistorial("MATMSG:TO:gaitanmarcelo@hotmail.com;BODY:esto es una prueba;SUB:Testing de mail");
      return;
    }

    
    this.barcodeScanner.scan().then((barcodeData) => {
      //console.log(barcodeData);
      console.log("text: " + barcodeData.text);
      console.log("format: " + barcodeData.format);
      console.log("cancelled: " + barcodeData.cancelled);
      if(!barcodeData.cancelled && barcodeData.text != null){
        this.historialSrv.guardarHistorial(barcodeData.text);
      }
    }, (err) => {
        console.error(err);
        this.mostrar_mensaje("Error: " + err);
    });
  }

  mostrar_mensaje(mensaje){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();

  }

}
