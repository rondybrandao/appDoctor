import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErpPage } from './erp';

@NgModule({
  declarations: [
    ErpPage,
  ],
  imports: [
    IonicPageModule.forChild(ErpPage),
  ],
})
export class ErpPageModule {}
