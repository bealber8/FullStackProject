import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-deleteAccessories',
  templateUrl: 'deleteAccessories.html'
})
export class DeleteAccessoriesPage {
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

  deleteAccessory(id){
    this.servicio.deleteAccessory(id).subscribe(
      (data) =>{
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
