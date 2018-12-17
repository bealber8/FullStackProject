import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { MythicalModel } from '../../models/mythicalModel';
import { InsertMythicalModelPage } from '../insertMythicalModels/insertMythicalModel';
import { UpdateMythicalModelPage } from '../updateMythicalModel/updateMythicalModel';

@Component({
  selector: 'page-manageMythicalModels',
  templateUrl: 'manageMythicalModels.html'
})
export class ManageMythicalModelsPage {
  models: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad(){
    this.servicio.getMythicalModelsSQL().then(
      (data) => {
        this.models = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  insertMythicalModel(){
    this.navCtrl.push(InsertMythicalModelPage, {"parentPage": this});
  }

  updateMythicalModel(model: MythicalModel){
    this.navCtrl.push(UpdateMythicalModelPage, {model: model, "parentPage": this});
  }

  deleteMythicalModel(id){
    this.servicio.deleteMythicalModelSQL(id).then(
      (data) =>{
        this.models.splice(
          this.models.map(item => item.id).indexOf(id), 1)
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Mythical Model was deleted successfully',
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
