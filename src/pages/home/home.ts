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
              private platform: Platform
              ) {

  }

  scan(){
    
    if(this.platform.is('cordova')){
      
      return;
    }

    console.log("Realizando scan");
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData);
      console.log("text: " + barcodeData.text);
      console.log("format: " + barcodeData.format);
      console.log("cancelled: " + barcodeData.cancelled);
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
