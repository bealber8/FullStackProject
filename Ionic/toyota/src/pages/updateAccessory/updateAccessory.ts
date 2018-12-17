import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Accessory } from '../../models/accessories';

@Component({
  selector: 'page-updateAccessory',
  templateUrl: 'updateAccessory.html'
})
export class UpdateAccessoryPage {
  accessory: Accessory = new Accessory;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public params: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.accessory = this.navParams.get('accessory');

    // this.formUpdate = this.fb.group({
    //   category: ['', [Validators.required]],
    //   name: ['', [Validators.required]]
    // });
  }

  updateAccessory(form: NgForm){
    console.log(form)
    this.userService.updateAccessory(form, this.accessory.id).subscribe(
      result => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Accessory was updated successfully',
          duration: 3000
        });
        toast.present();
      },
      error => console.log(error)
    );

    this.userService.updateAccessorySQL(form, this.accessory.id).then(
      result => {
        // this.navParams.get("parentPage").ionViewDidLoad();
        // this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Accessory was updated successfully to SQLite db',
          duration: 3000
        });
        toast.present();
      },
      error => {
        const toast = this.toastCtrl.create({
          message: 'Accessory not updated to SQLite db',
          duration: 3000
        });
        toast.present();
      }
    );
  }

}
