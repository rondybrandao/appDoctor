import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuadroClinicoPage } from './quadro-clinico';

@NgModule({
  declarations: [
    QuadroClinicoPage,
  ],
  imports: [
    IonicPageModule.forChild(QuadroClinicoPage),
  ],
})
export class QuadroClinicoPageModule {}
