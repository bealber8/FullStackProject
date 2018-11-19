import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-updateAccessory',
  templateUrl: 'updateAccessory.html'
})
export class UpdateAccessoryPage {
  accessory: any;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public params: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    console.log(this.params.data);
    if (this.params.data) {
      this.userService.getAccessory(this.params.data).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    this.formUpdate = this.fb.group({
      category: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  updateAccessory(){
    console.log(this.params.data);
    var accessory = {
      category: this.formUpdate.get('category').value,
      name: this.formUpdate.get('name').value
    }
    this.userService.updateAccessory(accessory, this.params.data).subscribe(
      (data) => {
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Accessory was updated successfully',
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
