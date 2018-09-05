/**
 * The Application component for the Big Top App.
 */

import { ENV } from '@env';

import { Component, ViewChild } from '@angular/core';

import { Content, Events, Nav, Platform } from 'ionic-angular';

import { IntroductionPage } from '@pages/introduction/introduction';
import { SignInPage } from '@pages/sign-in/sign-in';

import { LoggerService } from '@services/log4ts/logger.service';

let isDebugMode = ENV.isDebugMode;

interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class BigTopApp {

  @ViewChild(Nav) private nav: Nav;
  @ViewChild(Content) private content: Content;

  public navigationPages: PageInterface[] = [
    { title: 'Discover Events', name: 'IntroductionPage', component: IntroductionPage, icon: 'beer' }
    // { title: 'Discover Venues', name: 'IntroductionPage', component: IntroductionPage, icon: 'person' },
  ];

  public accountPages: PageInterface[] = [
    // { title: 'Sign In', name: 'SignInPage', component: SignInPage, icon: 'log-in' }
    // { title: 'My Account', name: 'IntroductionPage', component: IntroductionPage, icon: 'person' },
    // { title: 'Register', name: 'IntroductionPage', component: IntroductionPage, icon: 'person-add' }
  ];

  public settingsPages: PageInterface[] = [
    { title: 'Connected Services', name: 'IntroductionPage', component: IntroductionPage, icon: 'bluetooth' }
  ];

  public legalPages: PageInterface[] = [
    { title: 'Terms of Use', name: 'IntroductionPage', component: IntroductionPage, icon: 'document' },
    { title: 'Privacy Policy', name: 'IntroductionPage', component: IntroductionPage, icon: 'body' },
    { title: 'About Big Top', name: 'IntroductionPage', component: IntroductionPage, icon: 'information-circle' }
  ];

  public rootPage: any = IntroductionPage;

  public theme: String = 'facebook-messenger-theme';

  constructor(public platform: Platform,
              public event: Events,
              private logger: LoggerService) {

    this.initializeApp();
  }

  private initializeApp() {

    this.getPlatformInfo();

    this.platform.ready().then(() => {
      this.logger.info('BigTopApp: platform.ready()');
    });
  }

  public openPage(page: any) {
    this.nav.setRoot(page.component);
  }

  public signIn() {
    this.nav.push(SignInPage);
  }

  public toggleTheme() {

    this.logger.info('BigTopApp: toggleTheme()');

    if (this.theme === 'facebook-messenger-theme') {
      this.theme = 'green-and-blue-theme';
    } else {
      this.theme = 'facebook-messenger-theme';
    }
  }

  // https://ionicframework.com/docs/api/platform/Platform/

  private getPlatformInfo() {

    if (isDebugMode) {

      this.logger.info('Big Top App initialised');

      if (this.platform.is('mobileweb') || this.platform.is('core')) {
        this.logger.info('The Application is running in a browser');
      } else {
        this.logger.info('The Application is running on a device');
      }

      if (this.platform.is('ios')) {
        this.logger.info('The Platform is iOS');
      } else if (this.platform.is('android')) {
        this.logger.info('The Platform is Android');
      } else if (this.platform.is('windows')) {
        this.logger.info('The Platform is Windows');
      }
    }
  }

  // no-bounce

  /**
   * @param {boolean} disable  Show/Hide the vertical scrollbar
   *
   * @example
   * this.setDisableScroll(true);
   *
   * @returns {void}
   */
  private setDisableScroll(disable: boolean) : void {

    let scroll = this.content.getScrollElement();
    scroll.style.overflowY = disable ? 'hidden' : 'scroll';
  }
}

/*

  // rootPage:any = HomePage;

  platform.ready().then(() => {

    event.subscribe('theme:toggle', () => {
      this.toggleTheme();
    });

  });

*/
