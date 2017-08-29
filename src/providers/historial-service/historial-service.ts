import { MapaPage } from './../../pages/mapa/mapa';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ScanData } from "../../models/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController, ToastController, Platform } from "ionic-angular";
import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts';

@Injectable()
export class HistorialServiceProvider {

  historial:ScanData[] = [];

  constructor(private iab: InAppBrowser, 
    private modalCtr:ModalController,
    private contacts: Contacts,
    private toastCtrl:ToastController,
    private platform: Platform
  ) {
   
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
      case "Contacto":
        this.crearContacto(scanData.texto);
      break;
    }
    
  }

  crearContacto(data:string){
    let campos:any= this.parse_vcard(data);
    console.log(campos);

    if(this.platform.is('core')){
      this.mostrarToast("estas en la pc, no se puede crear contactos");
      return;
    }
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, campos.fn);
    contact.phoneNumbers = [new ContactField('mobile', campos.tel[0].value[0] )];
    contact.save().then(
      () => this.mostrarToast("Contacto " + contact.name + " creado"),
      (error: any) => console.error('Error saving contact.', error)
    );

  }

  mostrarToast(texto:string){
    let toast= this.toastCtrl.create({
      message : texto,
      duration:3000,
      position:"bottom"
    }).present();
  }

  private parse_vcard( input:string ) {

    var Re1 = /^(version|fn|title|org):(.+)$/i;
    var Re2 = /^([^:;]+);([^:]+):(.+)$/;
    var ReKey = /item\d{1,2}\./;
    var fields = {};

    input.split(/\r\n|\r|\n/).forEach(function (line) {
        var results, key;

        if (Re1.test(line)) {
            results = line.match(Re1);
            key = results[1].toLowerCase();
            fields[key] = results[2];
        } else if (Re2.test(line)) {
            results = line.match(Re2);
            key = results[1].replace(ReKey, '').toLowerCase();

            var meta = {};
            results[2].split(';')
                .map(function (p, i) {
                var match = p.match(/([a-z]+)=(.*)/i);
                if (match) {
                    return [match[1], match[2]];
                } else {
                    return ["TYPE" + (i === 0 ? "" : i), p];
                }
            })
                .forEach(function (p) {
                meta[p[0]] = p[1];
            });

            if (!fields[key]) fields[key] = [];

            fields[key].push({
                meta: meta,
                value: results[3].split(';')
            })
        }
    });

    return fields;
};

}
