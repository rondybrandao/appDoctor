import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TratamentoPage } from '@pages/tratamento/tratamento';

/**
 * Generated class for the ConsultasAgendadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultas-agendadas',
  templateUrl: 'consultas-agendadas.html',
})
export class ConsultasAgendadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasAgendadasPage');
  }

  public openTratamento() {
    this.navCtrl.push(TratamentoPage)
  }

}
