import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-futureModels',
  templateUrl: 'futureModels.html'
})
export class FutureModelsPage {
  models: any;

  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
  }

  ionViewDidLoad(){
    console.log('hola')
    this.servicio.getFutureModelsSQL().then(
      (data) => {
        this.models = data;
        // this.models.image = 'data:image/jpeg;base64,' + this.models.image;
        console.log(this.models.image);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
