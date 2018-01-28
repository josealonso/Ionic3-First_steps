import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { IonicPage } from 'ionic-angular';

import { HOME_PAGE, ABOUT_PAGE, CONTACT_PAGE, PROFILE_PAGE } from "../pages.constants";

@IonicPage({
  segment: 'tabs-page'  // Importante. Para que recargue la página en la cual estamos
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HOME_PAGE;  
  tab2Root = ABOUT_PAGE;
  tab3Root = CONTACT_PAGE;
  tab4Root = PROFILE_PAGE;

  constructor() {

  }
}
