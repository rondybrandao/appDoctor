import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SLIDE_IN_LEFT_ANIMATION } from '@pages/animations/sliding-entrances/slide-in-left.animation';

@IonicPage()
@Component({
  selector: 'page-prontuario',
  templateUrl: 'prontuario.html',
  animations: [ SLIDE_IN_LEFT_ANIMATION ]
})
export class ProntuarioPage {

  patient;

  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,) {

                var patients = [
                  {
                    name: 'Han Solo',
                    quote: 'Depressao',
                    image: 'assets/imgs/pacientes/avatar-han.png',
                  }
                ];
                this.patient = patients[0];
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProntuarioPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
