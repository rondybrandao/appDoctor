import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultasAgendadasPage } from './consultas-agendadas';

@NgModule({
  declarations: [
    ConsultasAgendadasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultasAgendadasPage),
  ],
})
export class ConsultasAgendadasPageModule {}
