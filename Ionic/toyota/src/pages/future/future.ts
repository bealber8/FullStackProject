import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-future',
  templateUrl: 'future.html'
})
export class FuturePage {
  models: any;
  
  constructor(public navCtrl: NavController, private domSanitizer: DomSanitizer, public servicio: UserServiceProvider) {
    
  }

  ionViewDidLoad(){
    console.log('hola')
    this.servicio.getFutureModels().subscribe(
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
