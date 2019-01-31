import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface CardInterface {
  name: string;
  avatar: string;
  day: string;
  month: string;
  year: string;
  img: string;
}

@IonicPage()
@Component({
  selector: 'page-nuvem',
  templateUrl: 'nuvem.html',
})
export class NuvemPage {

  cards: CardInterface[] = [
    {
      name: 'Benjamin Button',
      avatar: 'avatar-ben.png',
      day: '12',
      month: 'NOVEMBRO',
      year: '2018',
      img: 'ben-01-11-2018.png'
    },
    {
      name: 'Finn Von Turing',
      avatar: 'avatar-finn.png',
      day: '06',
      month: 'NOVEMBRO',
      year: '2018',
      img: 'ben-06-11-2018.png'
    },
    {
      name: 'Han Solo',
      avatar: 'avatar-han.png',
      day: '01',
      month: 'NOVEMBRO',
      year: '2018',
      img: 'ben-12-11-2018.png'
    },
    {
      name: 'Luke skywalker',
      avatar: 'avatar-luke.png',
      day: '25',
      month: 'OUTUBRO',
      year: '2018',
      img: 'ben-12-11-2018.png'
    }
  ];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuvemPage');
  }

}
