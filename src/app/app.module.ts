import { QuadroClinicoPage } from './../pages/quadro-clinico/quadro-clinico';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Config, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { BigTopApp } from './app.component';

// Welcome pages
import { IntroductionPage } from '@pages/introduction/introduction';

// Account pages
import { SignInPage } from '@pages/sign-in/sign-in';

// Pages
import { TabsPage } from '@pages/tabs/tabs';
import { EventsPage } from '@pages/events/events';
import { SearchPage } from '@pages/search/search';
import { ContactPage } from './../pages/contact/contact';
import { PatientsSevice } from '@services/patients/patients-service';
import { ModalEditPage } from '@pages/modal-edit/modal-edit';
import { NuvemPage } from '@pages/nuvem/nuvem';
import { EstatisticaPage } from '@pages/estatistica/estatistica';
import { ProntuarioPage } from '@pages/prontuario/prontuario';
import { ErpPage } from '@pages/erp/erp';
import { TributosPage } from '@pages/tributos/tributos';
import { DespesasPage } from '@pages/despesas/despesas';
import { ConsultasAgendadasPage } from '@pages/consultas-agendadas/consultas-agendadas';

// Logging Services
import { LoggerService } from '@services/log4ts/logger.service';
import { ConsoleLoggerService } from '@services/log4ts/console-logger.service';

// Bespoke Page Transitions
import { SlideTransition } from '@pages/transitions/slide-transition';

//material
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';

//material 2
import {
  MatExpansionModule,
  MatIconModule,
  MatIconRegistry,
  MatSelectModule
} from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

//modal
import { ModalContentPage } from '@pages/modal-content/modal-content';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//import { DialogOverviewExampleDialog } from '@pages/modal-content/DialogOverviewExampleDialog';



@NgModule({
  declarations: [
    BigTopApp,
    IntroductionPage,
    SignInPage,
    TabsPage,
    EventsPage,
    SearchPage,
    ContactPage,
    ModalContentPage,
    ModalEditPage,
    QuadroClinicoPage,
    NuvemPage,
    EstatisticaPage,
    ProntuarioPage,
    ErpPage, 
    TributosPage,
    DespesasPage,
    ConsultasAgendadasPage

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    IonicModule,
    // HttpModule,
    IonicModule.forRoot(BigTopApp, {}, {
      links: [
        { component: IntroductionPage, name: 'Introduction', segment: 'introduction' },
        { component: SignInPage, name: 'SignInPage', segment: 'sign-in' },
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: EventsPage, name: 'Events', segment: 'events' },
        { component: ContactPage, name: 'Contacts', segment: 'contato' },
        { component: SearchPage, name: 'Search', segment: 'search' },
        { component: ModalContentPage, name: 'ModalContent', segment: 'modal-content' }
      ]
    }),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDg7gXFwYsPy9KKH5gVKRo9ggeB78q-Vjw",
      authDomain: "draanacristina-f74bd.firebaseapp.com",
      databaseURL: "https://draanacristina-f74bd.firebaseio.com",
      projectId: "draanacristina-f74bd",
      storageBucket: "draanacristina-f74bd.appspot.com",
      messagingSenderId: "1016055136597"
    }),
    AngularFireDatabaseModule
    // , IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BigTopApp,
    IntroductionPage,
    SignInPage,
    TabsPage,
    EventsPage,
    SearchPage,
    ContactPage,
    ModalContentPage,
    ModalEditPage,
    QuadroClinicoPage,
    NuvemPage,
    EstatisticaPage, 
    ProntuarioPage,
    ErpPage,
    TributosPage,
    DespesasPage,
    ConsultasAgendadasPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LoggerService, useClass: ConsoleLoggerService},
    MatIconRegistry,
    PatientsSevice
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(public config: Config) {
    this.config.setTransition('slide-transition', SlideTransition);
  }
}
