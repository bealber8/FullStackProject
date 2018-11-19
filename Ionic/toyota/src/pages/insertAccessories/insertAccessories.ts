import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertAccessories',
  templateUrl: 'insertAccessories.html'
})
export class InsertAccessoriesPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      category: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }
  

  postAccessory(){
    var accessory = {
      category: this.formInsert.get('category').value,
      name: this.formInsert.get('name').value
    }
    console.log(accessory);
    this.userService.postAccessory(accessory).subscribe(
      (data) => {
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Accessory was added successfully',
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
