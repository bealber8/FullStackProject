import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import {InsertAccessoriesPage} from '../insertAccessories/insertAccessories';
import { UpdateAccessoryPage } from '../updateAccessory/updateAccessory';
import { FutureModel } from '../../models/futureModel';
import { InsertFutureModelPage } from '../insertFutureModels/insertFutureModel';
import { UpdateFutureModelPage } from '../updateFutureModel/updateFutureModel';

@Component({
  selector: 'page-manageFutureModels',
  templateUrl: 'manageFutureModels.html'
})
export class ManageFutureModelsPage {
  models: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad(){
    this.servicio.getFutureModelsSQL().then(
      (data) => {
        this.models = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  insertFutureModel(){
    this.navCtrl.push(InsertFutureModelPage, {"parentPage": this});
  }

  updateFutureModel(model: FutureModel){
    this.navCtrl.push(UpdateFutureModelPage, {model: model, "parentPage": this});
  }

  deleteFutureModel(id){
    this.servicio.deleteFutureModelSQL(id).then(
      (data) =>{
        this.models.splice(
          this.models.map(item => item.id).indexOf(id), 1)
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Future Model was deleted successfully',
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
