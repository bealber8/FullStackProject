import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html'
})
export class ModelsPage {
  models: any;
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public servicio: UserServiceProvider) {
    
  }

  ionViewDidLoad(){
    this.servicio.getModels().subscribe(
      (data) => {
        this.models = data;
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'funcionó',
          duration: 3000
        });
        toast.present();
      },
      (error) => {
        console.error(error);
        const toast = this.toastCtrl.create({
          message: 'esto va de culo '+ error.message,
          duration: 10000
        });
        toast.present();
      }
    )
  }

  // .then(models => {
  //   this.models = models;
  //   console.log(JSON.stringify(models));
  //   const toast = this.toastCtrl.create({
  //     message: 'se supone que funciona: ' + JSON.stringify(models),
  //     duration: 3000
  //   });
  //   toast.present();
  // })
  // .catch(error => {
  //   console.error(error);
  //   const toast = this.toastCtrl.create({
  //     message: 'no furula: ' + JSON.stringify(error),
  //     duration: 3000
  //   });
  //   toast.present();
  }

