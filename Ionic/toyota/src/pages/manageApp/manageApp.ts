import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ManageModelsPage } from '../manageModels/manageModels';
import { ManageAccessoriesPage } from '../manageAccessories/manageAccessories';
import { ManageSparesPage } from '../manageSpares/manageSpares';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-manageApp',
  templateUrl: 'manageApp.html'
})
export class ManageAppPage {
  tab1Root: any = ManageModelsPage;
  tab2Root: any = ManageAccessoriesPage;
  tab3Root: any = ManageSparesPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  // manageModels(){
  //   this.navCtrl.push(ManageModelsPage);
  // }

  // manageAccessories(){
  //   this.navCtrl.push(ManageAccessoriesPage);
  // }

  // manageSpares(){
  //   this.navCtrl.push(ManageSparesPage);
  // }
}
