import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Cardealership } from '../../models/car';

@Component({
  selector: 'page-updateCardealership',
  templateUrl: 'updateCardealership.html'
})
export class UpdateCardealershipPage {
  car: Cardealership = new Cardealership;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public params: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.car = this.navParams.get('car');
  }

  updateCar(form: NgForm){
    console.log(form)
    this.userService.updateCardealership(form, this.car.id).then(
      result => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Car dealership was updated successfully',
          duration: 3000
        });
        toast.present();
      },
      error => console.log(error)
    );
  }

}
