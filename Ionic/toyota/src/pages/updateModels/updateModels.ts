import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { UpdateModelPage } from '../updateModel/updateModel';

@Component({
  selector: 'page-updateModels',
  templateUrl: 'updateModels.html'
})
export class UpdateModelsPage {
  models: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    
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

  updateModel(id){
    console.log(id);
    this.navCtrl.push(UpdateModelPage, id);
  }

}
