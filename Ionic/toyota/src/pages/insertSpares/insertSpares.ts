import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertSpares',
  templateUrl: 'insertSpares.html'
})
export class InsertSparesPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      category: ['', Validators.compose([Validators.maxLength(45), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      name: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      reference: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])]
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
