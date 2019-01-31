import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProntuarioPage } from './prontuario';

@NgModule({
  declarations: [
    ProntuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ProntuarioPage),
  ],
})
export class ProntuarioPageModule {}
