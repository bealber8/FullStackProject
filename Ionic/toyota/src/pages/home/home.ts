import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Tabs } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { TabsPage } from '../tabs/tabs';
import { MyApp } from '../../app/app.component';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {

  }
  // ionViewDidLoad() {
  //   let openTab = this.navParams.get('openTab');
  //   if (openTab) {
  //     this.tabRef.select(openTab);
  //   }
  // }

  // ionViewDidLoad(){
  //   let nav= this.app.getRootNav;
  //   this.navCtrl.setRoot(MyApp);
  // }

}
