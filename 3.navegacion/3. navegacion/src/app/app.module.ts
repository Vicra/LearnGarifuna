import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  PrincipalPage,
  AjustesPage,
  Ajustes2Page,
  ModalPage,
  Pagina2Page,
  Pagina3Page,
  TabsPage
} from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atras'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
