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
    // console.log(this.params.data);
    // var model = {
    //   name: this.formUpdate.get('name').value,
    //   power: this.formUpdate.get('power').value,
    //   fuel: this.formUpdate.get('fuel').value,
    //   price: this.formUpdate.get('price').value
    // }
    // this.userService.updateModel(form, this.model.id).subscribe(
    //   result => {
    //     console.log(data);
    //     const toast = this.toastCtrl.create({
    //       message: 'Model was updated successfully',
    //       duration: 3000
    //     });
    //     toast.present();
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.userService.updateModel(form, this.model.id).subscribe(
      result => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
      },
      error => console.log(error)
    );
  }

}
