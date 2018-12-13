import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertSpares',
  templateUrl: 'insertSpares.html'
})
export class InsertSparesPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      category: ['', Validators.compose([Validators.maxLength(45), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      name: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      reference: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
      suppliers: ['', Validators.required]
    });
  }
  

  postSpare(){
    var spare = {
      category: this.formInsert.get('category').value,
      name: this.formInsert.get('name').value,
      reference: this.formInsert.get('reference').value,
      suppliers: this.formInsert.get('suppliers').value
    }
    console.log(spare);
    this.userService.postSpares(spare).subscribe(
      (data) => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Spare was added successfully',
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
