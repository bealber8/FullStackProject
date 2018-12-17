import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Cardealership } from '../../models/car';
import { InsertCardealershipPage } from '../insertCardealership/insertCardealership';
import { UpdateCardealershipPage } from '../updateCardealership/updateCardealership';
import { InsertSuppliersPage } from '../insertSuppliers/insertSuppliers';
import { Supplier } from '../../models/supplier';
import { UpdateSuppliersPage } from '../updateSuppliers/updateSuppliers';

@Component({
  selector: 'page-manageSuppliers',
  templateUrl: 'manageSuppliers.html'
})
export class ManageSuppliersPage {
  suppliers: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad(){
    this.servicio.getSuppliers().then(
      (data) => {
        this.suppliers = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  insertSupplier(){
    this.navCtrl.push(InsertSuppliersPage, {"parentPage": this});
  }

  updateSupplier(supplier: Supplier){
    this.navCtrl.push(UpdateSuppliersPage, {supplier: supplier, "parentPage": this});
  }

  deleteSupplier(id){
    this.servicio.deleteSupplier(id).then(
      (data) =>{
        this.suppliers.splice(
          this.suppliers.map(item => item.id).indexOf(id), 1)
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Supplier was deleted successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        if(error === 401){
          console.log('hola');
        }
        else{
          //console.log(error.status);
        }
        // const toast = this.toastCtrl.create({
        //   message: 'You do not have administrator permissions' + error,
        //   duration: 3000
        // });
        // toast.present();
        
      }
    );
  }
}
