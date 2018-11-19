import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-deleteModels',
  templateUrl: 'deleteModels.html'
})
export class DeleteModelsPage {
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

  deleteModel(id){
    this.servicio.deleteModel(id).subscribe(
      (data) =>{
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
  }
}
