import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertAccessories',
  templateUrl: 'insertAccessories.html'
})
export class InsertAccessoriesPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      category: ['', Validators.compose([Validators.maxLength(45), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      name: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      suppliers: ['', Validators.required]
    });
  }
  

  postAccessory(){
    var accessory = {
      category: this.formInsert.get('category').value,
      name: this.formInsert.get('name').value,
      suppliers: this.formInsert.get('suppliers').value
    }
    console.log(accessory);
    this.userService.postAccessory(accessory).subscribe(
      (data) => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
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
