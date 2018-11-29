import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-spares',
  templateUrl: 'spares.html'
})
export class SparesPage {
  spares: any;
  
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
    
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

}
