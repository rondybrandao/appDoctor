import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventsPage } from '@pages/events/events';
import { SearchPage } from '@pages/search/search';

import { LoggerService } from '@services/log4ts/logger.service';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root: any = EventsPage;
  public tab2Root: any = SearchPage;
  public tab3Root: any = SearchPage;
  public tab4Root: any = SearchPage;

  public tabIndex: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private logger: LoggerService) {

    this.logger.info('TabsPage initialised');

    this.tabIndex = navParams.data.tabIndex || 0;
  }
}
