import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuvemPage } from './nuvem';

@NgModule({
  declarations: [
    NuvemPage,
  ],
  imports: [
    IonicPageModule.forChild(NuvemPage),
  ],
})
export class NuvemPageModule {}
