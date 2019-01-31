import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoggerService } from '@services/log4ts/logger.service';

import { SLIDE_IN_LEFT_ANIMATION } from '@pages/animations/sliding-entrances/slide-in-left.animation';

interface CardInterface {
  name: string;
  location: string;
  day: string;
  month: string;
  year: string;
  img: string;
  href: string;
  
}

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
  animations: [ SLIDE_IN_LEFT_ANIMATION ]
})
export class EventsPage {

  private location: String = 'Kingston, ACT';
  isButtonVisible: boolean;

  cards: CardInterface[] = [
    {
      name: 'Estudo afirma: uso de maconha por adolescentes aumenta risco de psicose',
      location: 'Estudos mostram que pessoas propensas a problemas mentais geralmente são mais atraídas por entorpecentes',
      day: '11',
      month: 'OUT',
      year: '2018',
      img: 'img-saude-mental-maconha.jpg',
      href: 'this.openNews1()',
      //href: 'https://veja.abril.com.br/blog/letra-de-medico/estudo-afirma-uso-de-maconha-por-adolescentes-aumenta-risco-de-psicose/',
      //isButtonVisible: true
    },
    {
      name: 'Vício em sexo é distúrbio de saúde mental, diz OMS',
      location: 'Alguns dos sintomas do transtorno de comportamento sexual compulsivo incluem negligenciar a saúde e as responsabilidades em prol do sexo',
      day: '11',
      month: 'JUL',
      year: '2018',
      img: 'img-sexo.jpg',
      href: 'https://veja.abril.com.br/saude/vicio-em-sexo-e-disturbio-de-saude-mental-diz-oms/',
      //isButtonVisible: true
    },
    {
      name: 'Ataque de pânico: sete dicas de especialistas para controlar as crises',
      location: 'Entre as sugestões está ouvir música, evitar a cafeína e se concentrar na respiração',
      day: '15',
      month: 'NOV',
      year: '2018',
      img: 'img-ansiedade.jpeg',
      href: 'https://veja.abril.com.br/saude/as-sete-maneiras-de-controlar-um-ataque-de-panico/',
      //isButtonVisible: true
    },
    {
      name: 'Sentimentos são mapeados',
      location: 'Pesquisa realizada com mais de mil pessoas permitiu que pesquisadores finlandeses localizassem em que parte do nosso corpo sentimos cada sensação',
      day: '13',
      month: 'NOV',
      year: '2018',
      img: 'img-news-mapa-fisico.jpg',
      href: 'https://revistagalileu.globo.com/Ciencia/noticia/2018/09/sentimentos-sao-mapeados-para-entender-sua-influencia-no-bem-estar.html',
      //isButtonVisible: true
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private logger: LoggerService) {

    this.logger.info('EventsPage initialised');
  }

  public toggleLocation() {
    this.logger.info('EventsPage: toggleLocation()');
  }

  public goToEvent(card: any) {
    this.logger.info('EventsPage: goToEvent()');
  }

  public openNews1(){
    window.open('http://www.google.com');
  }
  public openNews2(){
    window.open('https://veja.abril.com.br/saude/vicio-em-sexo-e-disturbio-de-saude-mental-diz-oms/');
  }
}

// https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/speaker-list/speaker-list.ts

/*

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  public inAppBrowser: InAppBrowser

  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
  }

*/
