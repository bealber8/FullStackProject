import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { FutureModel } from '../../models/futureModel';

@Component({
  selector: 'page-updateFutureModel',
  templateUrl: 'updateFutureModel.html'
})
export class UpdateFutureModelPage {
  model: FutureModel = new FutureModel;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public params: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.model = this.navParams.get('model');
  }

  updateModel(form: NgForm){
    console.log(form)
    this.userService.updateFutureModelSQL(form, this.model.id).then(
      result => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Future model was updated successfully',
          duration: 3000
        });
        toast.present();
      },
      error => console.log(error)
    );
  }

}
