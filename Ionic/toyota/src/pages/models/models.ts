import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html'
})
export class ModelsPage {
  models: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
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

}
