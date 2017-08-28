import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage, HomePage, GuardadosPage, MapaPage } from '../pages/index.pages';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialServiceProvider } from '../providers/historial-service/historial-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, 
    HomePage, 
    GuardadosPage, 
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage, 
    HomePage, 
    GuardadosPage, 
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialServiceProvider
  ]
})
export class AppModule {}
