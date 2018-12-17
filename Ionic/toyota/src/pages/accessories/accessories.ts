import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-accessories',
  templateUrl: 'accessories.html'
})
export class AccessoriesPage {
  accessories: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
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

}
