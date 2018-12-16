import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'page-insertModels',
  templateUrl: 'insertModels.html'
})
export class InsertModelsPage {
  formInsert: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, public userService: UserServiceProvider) {
    this.formInsert = this.fb.group({
      name: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      power: ['', Validators.required],
      fuel: ['', Validators.compose([Validators.maxLength(45), Validators.pattern('[a-zA-Z ,]*'), Validators.required])],
      price: ['', Validators.required],
      suppliers: ['', Validators.required],
      cardealership_id: ['', Validators.required]
    });
  }
  

  postModel(){
    var model = {
      name: this.formInsert.get('name').value,
      power: this.formInsert.get('power').value,
      fuel: this.formInsert.get('fuel').value,
      price: this.formInsert.get('price').value,
      suppliers: this.formInsert.get('suppliers').value
    }
    var id = this.formInsert.get('cardealership_id').value;
    var modelSQL = {
      name: this.formInsert.get('name').value,
      power: this.formInsert.get('power').value,
      fuel: this.formInsert.get('fuel').value,
      price: this.formInsert.get('price').value,
      suppliers: this.formInsert.get('suppliers').value,
      cardealership_id: this.formInsert.get('cardealership_id').value
    }
    console.log(model);
    this.userService.postModel(model, id).subscribe(
      (data) => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        console.log(data);
        
        const toast = this.toastCtrl.create({
          message: 'Model was added successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) => {
        console.log(error);
      }
    );
    this.userService.postModelSQL(modelSQL).then(
      (data) => {
        this.navParams.get("parentPage").ionViewDidLoad();
        this.navCtrl.pop();
        console.log(data);
        
        const toast = this.toastCtrl.create({
          message: 'Model was added successfully to SQLite db',
          duration: 3000
        });
        toast.present();
      },
      (error) => {
        console.log(error);
      }
    );

    this.userService.insertSupModSQL(modelSQL).then(
      (data) => {
        // this.navParams.get("parentPage").ionViewDidLoad();
        // this.navCtrl.pop();
        // console.log(data);
        
        const toast = this.toastCtrl.create({
          message: 'Relationship was added successfully to SQLite db',
          duration: 3000
        });
        toast.present();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
