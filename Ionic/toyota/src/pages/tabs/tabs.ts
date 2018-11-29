import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {LoginPage} from '../login/login'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = LoginPage;
  // tab3Root = ContactPage;

  constructor() {

  }
}
