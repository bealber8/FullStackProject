import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-spares',
  templateUrl: 'spares.html'
})
export class SparesPage {
  spares: any;
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public servicio: UserServiceProvider) {
    
  }

  ionViewDidLoad(){
    this.servicio.getSpares().subscribe(
      (data) => {
        this.spares = data;
      },
      (error) => {
        console.error(error);
        const toast = this.toastCtrl.create({
          message: 'Error: no puede acceder al servidor, no dispone de conexión a internet',
          duration: 10000
        });
        toast.present();
      }
    )
  }

}
