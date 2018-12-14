import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertCardealership',
  templateUrl: 'insertCardealership.html'
})
export class InsertCardealershipPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      direction: ['', Validators.compose([Validators.maxLength(45), Validators.pattern('[a-zA-Z0-9, ]*'), Validators.required])],
      telephone: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[0-9-()+ ]*'), Validators.required])],
    });
  }
  

  postCar(){
    var direction = this.formInsert.get('direction').value;
    var telephone = this.formInsert.get('telephone').value;
    this.userService.postCardealership(direction, telephone).then(
      (data) => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Car dealership was added successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) => {
        console.log(error);
        const toast = this.toastCtrl.create({
          message: 'no inserta ' + error.message,
          duration: 3000
        });
        toast.present();
      }
    );
  }

}
