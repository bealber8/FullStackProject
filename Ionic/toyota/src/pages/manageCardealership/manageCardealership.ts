import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Cardealership } from '../../models/car';
import {InsertAccessoriesPage} from '../insertAccessories/insertAccessories';
import { UpdateAccessoryPage } from '../updateAccessory/updateAccessory';
import { InsertCardealershipPage } from '../insertCardealership/insertCardealership';
import { UpdateCardealershipPage } from '../updateCardealership/updateCardealership';

@Component({
  selector: 'page-manageCardealership',
  templateUrl: 'manageCardealership.html'
})
export class ManageCardealershipPage {
  cars: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad(){
    this.servicio.getCardealership().then(
      (data) => {
        this.cars = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  insertCar(){
    this.navCtrl.push(InsertCardealershipPage, {"parentPage": this});
  }

  updateCar(car: Cardealership){
    this.navCtrl.push(UpdateCardealershipPage, {car: car, "parentPage": this});
  }

  deleteCar(id){
    this.servicio.deleteCardealership(id).then(
      (data) =>{
        this.cars.splice(
          this.cars.map(item => item.id).indexOf(id), 1)
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Car dealership was deleted successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        if(error === 401){
          console.log('hola');
        }
        else{
          //console.log(error.status);
        }
        // const toast = this.toastCtrl.create({
        //   message: 'You do not have administrator permissions' + error,
        //   duration: 3000
        // });
        // toast.present();
        
      }
    );
  }
}
