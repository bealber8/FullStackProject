import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ManageModelsPage } from '../manageModels/manageModels';
import { InsertAccessoriesPage } from '../insertAccessories/insertAccessories';
import { UpdateModelsPage } from '../updateModels/updateModels';
import { UpdateAccessoriesPage } from '../updateAccessories/updateAccessories';
import { ManageAccessoriesPage } from '../manageAccessories/manageAccessories';
@Component({
  selector: 'page-manageApp',
  templateUrl: 'manageApp.html'
})
export class ManageAppPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }

  manageModels(){
    this.navCtrl.push(ManageModelsPage);
  }

  manageAccessories(){
    this.navCtrl.push(ManageAccessoriesPage);
  }
}
