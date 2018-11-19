import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { UpdateAccessoryPage } from '../updateAccessory/updateAccessory';

@Component({
  selector: 'page-updateAccessories',
  templateUrl: 'updateAccessories.html'
})
export class UpdateAccessoriesPage {
  accessories: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    
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

  updateAccessory(id){
    console.log(id);
    this.navCtrl.push(UpdateAccessoryPage, id);
  }

}
