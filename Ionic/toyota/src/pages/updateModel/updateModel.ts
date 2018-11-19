import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-updateModel',
  templateUrl: 'updateModel.html'
})
export class UpdateModelPage {
  model: any;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public params: NavParams, public fb: FormBuilder, public userService: UserServiceProvider) {
    console.log(this.params.data);
    if (this.params.data) {
      this.userService.get(this.params.data).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    this.formUpdate = this.fb.group({
      name: ['', [Validators.required]],
      power: ['', [Validators.required]],
      fuel: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  updateModel(){
    console.log(this.params.data);
    var model = {
      name: this.formUpdate.get('name').value,
      power: this.formUpdate.get('power').value,
      fuel: this.formUpdate.get('fuel').value,
      price: this.formUpdate.get('price').value
    }
    this.userService.updateModel(model, this.params.data).subscribe(
      (data) => {
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Model was updated successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
