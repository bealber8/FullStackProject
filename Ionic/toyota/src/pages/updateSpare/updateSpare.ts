import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Spare } from '../../models/spares';

@Component({
  selector: 'page-updateSpare',
  templateUrl: 'updateSpare.html'
})
export class UpdateSparePage {
  spare: Spare = new Spare;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public params: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.spare = this.navParams.get('spare');

    // this.formUpdate = this.fb.group({
    //   category: ['', [Validators.required]],
    //   name: ['', [Validators.required]]
    // });
  }

  updateSpare(form: NgForm){
    console.log(form)
    this.userService.updateSpares(form, this.spare.id).subscribe(
      result => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Spare was updated successfully',
          duration: 3000
        });
        toast.present();
      },
      error => console.log(error)
    );
  }

}
