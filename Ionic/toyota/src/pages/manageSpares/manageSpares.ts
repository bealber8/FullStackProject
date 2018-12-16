import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Spare } from '../../models/spares';
import { InsertSparesPage } from '../insertSpares/insertSpares';
import { UpdateSparePage } from '../updateSpare/updateSpare';

@Component({
  selector: 'page-manageSpares',
  templateUrl: 'manageSpares.html'
})
export class ManageSparesPage {
  spares: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad(){
    this.servicio.getSpares().subscribe(
      (data) => {
        this.spares = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  insertSpare(){
    this.navCtrl.push(InsertSparesPage, {"parentPage": this});
  }

  updateSpare(spare: Spare){
    this.navCtrl.push(UpdateSparePage, {spare: spare, "parentPage": this});
  }

  deleteSpare(id){
    this.servicio.deleteSpares(id).subscribe(
      (data) =>{
        this.spares.splice(
          this.spares.map(item => item.id).indexOf(id), 1)
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Spare was deleted successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        console.log(error);
      }
    );

    this.servicio.deleteSpareSQL(id).then(
      (data) =>{
        // this.models.splice(
        //   this.models.map(item => item.id).indexOf(id), 1)
        // console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Spare was deleted successfully to SQLite db',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        console.log(error);
      }
    );

    this.servicio.deleteSupSpareSQL(id).then(
      (data) =>{
        // this.models.splice(
        //   this.models.map(item => item.id).indexOf(id), 1)
        // console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Relationship was deleted successfully to SQLite db',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        console.log(error);
      }
    );
  }
}
