import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Tabs } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { TabsPage } from '../tabs/tabs';
import { MyApp } from '../../app/app.component';
import { UserServiceProvider} from '../../providers/user-service/user-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  cardealership: any[] = [];

  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public navParams: NavParams, public app: App) {

  }

  ionViewDidLoad(){
    this.getCardealership();
  }

  getCardealership(){
    this.servicio.getSupSpareSQL()
    .then(cardealership => {
      this.cardealership = cardealership;
    })
    .catch(error => {
      console.error(error);
    })
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
