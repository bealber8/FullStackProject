import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertSuppliers',
  templateUrl: 'insertSuppliers.html'
})
export class InsertSuppliersPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      nif: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
      name: ['', Validators.compose([Validators.maxLength(45), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      direction: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9,áéíóú ]*'), Validators.required])],
      telephone: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[0-9-()+ ]*'), Validators.required])],
    });
  }
  

  postSupplier(){
    var nif= this.formInsert.get('nif').value;
    var name= this.formInsert.get('name').value;
    var direction= this.formInsert.get('direction').value;
    var telephone= this.formInsert.get('telephone').value;
    
    this.userService.postSuppliers(nif, name, direction, telephone).then(
      (data) => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Supplier was added successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) => {
        console.log(error);
        const toast = this.toastCtrl.create({
          message: 'no inserta ' + error.message +' '+JSON.stringify(error),
          duration: 3000
        });
        toast.present();
      }
    );
  }

}
