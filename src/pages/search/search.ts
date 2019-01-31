import { ProntuarioPage } from './../prontuario/prontuario';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { IonicPage, AlertController, Platform, NavParams, ViewController, ModalController, NavController } from 'ionic-angular';

import { SLIDE_IN_LEFT_ANIMATION } from '@pages/animations/sliding-entrances/slide-in-left.animation';
import { ModalContentPage } from '@pages/modal-content/modal-content';
import { PatientsSevice } from '@services/patients/patients-service';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  animations: [ SLIDE_IN_LEFT_ANIMATION ]
})
export class SearchPage {
  
  patients: any;

  constructor(
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController,
    private patientService: PatientsSevice,
    public navCtrl: NavController
  ) {
    this.getPatientsList();
  }

  openModal(characterNum) {
    console.log(characterNum);
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  openProntuario() {
    let nav = this.navCtrl.push(ProntuarioPage) 
  }

  getPatientsList() {
    // Use snapshotChanges().map() to store the key
    this.patientService.getPatientsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(val => {
      this.patients = val;
      console.log(this.patients)
    });
  }

}
