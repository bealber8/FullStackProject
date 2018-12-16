import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { Model } from '../../models/model';
import { InsertModelsPage } from '../insertModels/insertModels';
import { UpdateModelPage } from '../updateModel/updateModel';

@Component({
  selector: 'page-manageModels',
  templateUrl: 'manageModels.html'
})
export class ManageModelsPage {
  models: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad(){
    this.servicio.getModels().subscribe(
      (data) => {
        this.models = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  insertModel(){
    this.navCtrl.push(InsertModelsPage, {"parentPage": this});
  }

  updateModels(model: Model){
    this.navCtrl.push(UpdateModelPage, {model: model, "parentPage": this});
  }

  deleteModel(id){
    this.servicio.deleteModel(id).subscribe(
      (data) =>{
        this.models.splice(
          this.models.map(item => item.id).indexOf(id), 1)
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Model was deleted successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        console.log(error);
      }
    );

    this.servicio.deleteModelsSQL(id).then(
      (data) =>{
        // this.models.splice(
        //   this.models.map(item => item.id).indexOf(id), 1)
        // console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Model was deleted successfully to SQLite db',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        console.log(error);
      }
    );

    this.servicio.deleteSupModSQL(id).then(
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
