import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Accessory } from '../../models/accessories';
import {InsertAccessoriesPage} from '../insertAccessories/insertAccessories';
import { UpdateAccessoryPage } from '../updateAccessory/updateAccessory';

@Component({
  selector: 'page-manageAccessories',
  templateUrl: 'manageAccessories.html'
})
export class ManageAccessoriesPage {
  accessories: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad(){
    this.servicio.getAccessories().subscribe(
      (data) => {
        this.accessories = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  insertAccessory(){
    this.navCtrl.push(InsertAccessoriesPage, {"parentPage": this});
  }

  updateAccessory(accessory: Accessory){
    this.navCtrl.push(UpdateAccessoryPage, {accessory: accessory, "parentPage": this});
  }

  deleteAccessory(id){
    this.servicio.deleteAccessory(id).subscribe(
      (data) =>{
        this.accessories.splice(
          this.accessories.map(item => item.id).indexOf(id), 1)
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Accessory was deleted successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        console.log(error);
      }
    );
  }
}
