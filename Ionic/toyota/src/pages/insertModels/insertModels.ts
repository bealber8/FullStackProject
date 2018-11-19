import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertModels',
  templateUrl: 'insertModels.html'
})
export class InsertModelsPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      name: ['', [Validators.required]],
      power: ['', [Validators.required]],
      fuel: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }
  

  postModel(){
    var model = {
      name: this.formInsert.get('name').value,
      power: this.formInsert.get('power').value,
      fuel: this.formInsert.get('fuel').value,
      price: this.formInsert.get('price').value
    }
    this.userService.postModel(model).subscribe(
      (data) => {
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Model was added successfully',
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
