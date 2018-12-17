import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertMythicalModel',
  templateUrl: 'insertMythicalModel.html'
})
export class InsertMythicalModelPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      name: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9- ]*'), Validators.required])],
      description: ['', Validators.compose([Validators.maxLength(255), Validators.pattern('[a-zA-Z()-,.""\' ]*'), Validators.required])],
      image: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9.-/ ]*'), Validators.required])],
      cardealership_id: ['', Validators.required]
    });
  }
  

  postModel(){
    var model = {
      name: this.formInsert.get('name').value,
      description: this.formInsert.get('description').value,
      image: this.formInsert.get('image').value,
      cardealership_id: this.formInsert.get('cardealership_id').value
    }
    console.log(model);
    this.userService.postMythicalModelSQL(model).then(
      (data) => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Mythical model was added successfully',
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
