import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-edit',
  templateUrl: 'modal-edit.html',
})
export class ModalEditPage {
  patientKey: any;

  constructor(public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController) {
    this.patientKey = this.params.data;
    console.log(this.patientKey);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalEditPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
