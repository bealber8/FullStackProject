import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { MythicalModel } from '../../models/mythicalModel';

@Component({
  selector: 'page-updateMythicalModel',
  templateUrl: 'updateMythicalModel.html'
})
export class UpdateMythicalModelPage {
  model: MythicalModel = new MythicalModel;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public params: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.model = this.navParams.get('model');
  }

  updateModel(form: NgForm){
    console.log(form)
    this.userService.updateMythicalModelSQL(form, this.model.id).then(
      result => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Mythical model was updated successfully',
          duration: 3000
        });
        toast.present();
      },
      error => console.log(error)
    );
  }

}
