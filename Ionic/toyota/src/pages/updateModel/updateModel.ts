import { Component } from '@angular/core';
import { NavParams, NavController, ToastController, IonicPage } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Model } from '../../models/model';

@IonicPage()
@Component({
  selector: 'page-updateModel',
  templateUrl: 'updateModel.html'
})
export class UpdateModelPage {
  model: Model = new Model;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public params: NavParams, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.model = this.navParams.get('model');

    // this.formUpdate = this.fb.group({
    //   name: ['', [Validators.required]],
    //   power: ['', [Validators.required]],
    //   fuel: ['', [Validators.required]],
    //   price: ['', [Validators.required]]
    // });
  }

  updateModel(form: NgForm){
    this.userService.updateModel(form, this.model.id).subscribe(
      result => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Model was updated successfully',
          duration: 3000
        });
        toast.present();
      },
      error => console.log(error)
    );

    this.userService.updateModelSQL(form, this.model.id).then(
      result => {
        // this.navParams.get("parentPage").ionViewDidLoad();
        // this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Model was updated successfully to SQLite db',
          duration: 3000
        });
        toast.present();
      },
      error => {
        const toast = this.toastCtrl.create({
          message: 'Model not updated to SQLite db',
          duration: 3000
        });
        toast.present();
      }
    );
  }

}
