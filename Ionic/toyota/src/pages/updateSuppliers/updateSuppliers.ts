import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, NgForm} from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Supplier } from '../../models/supplier';

@Component({
  selector: 'page-updateSuppliers',
  templateUrl: 'updateSuppliers.html'
})
export class UpdateSuppliersPage {
  supplier: Supplier = new Supplier;
  formUpdate: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public params: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.supplier = this.navParams.get('supplier');
  }

  updateSupplier(form: NgForm){
    console.log(form)
    this.userService.updateSupplier(form, this.supplier.id).then(
      result => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'Supplier was updated successfully',
          duration: 3000
        });
        toast.present();
      },
      error => console.log(error)
    );
  }

}
