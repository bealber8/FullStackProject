import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { InsertModelsPage } from '../insertModels/insertModels';
import { InsertAccessoriesPage } from '../insertAccessories/insertAccessories';
import { UpdateModelsPage } from '../updateModels/updateModels';
import { UpdateAccessoriesPage } from '../updateAccessories/updateAccessories';
import { DeleteModelsPage } from '../deleteModels/deleteModels';
import { DeleteAccessoriesPage } from '../deleteAccessories/deleteAccessories';
@Component({
  selector: 'page-manageModels',
  templateUrl: 'manageModels.html'
})
export class ManageModelsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }

  insertModels(){
    this.navCtrl.push(InsertModelsPage);
  }

  updateModels(){
    this.navCtrl.push(UpdateModelsPage);
  }

  deleteModels(){
    this.navCtrl.push(DeleteModelsPage);
  }

  insertAccessories(){
    this.navCtrl.push(InsertAccessoriesPage);
  }

  updateAccessories(){
    this.navCtrl.push(UpdateAccessoriesPage);
  }

  deleteAccessories(){
    this.navCtrl.push(DeleteAccessoriesPage);
  }
}
