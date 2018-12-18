import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-accessories',
  templateUrl: 'accessories.html'
})
export class AccessoriesPage {
  accessories: any;
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public servicio: UserServiceProvider) {
    
  }

  ionViewDidLoad(){
    this.servicio.getAccessories().subscribe(
      (data) => {
        this.accessories = data;
      },
      (error) => {
        console.error(error);
        const toast = this.toastCtrl.create({
          message: 'Error: no puede acceder al servidor, no dispone de conexión a internet',
          duration: 10000
        });
        toast.present();
      }
    )
  }

}
