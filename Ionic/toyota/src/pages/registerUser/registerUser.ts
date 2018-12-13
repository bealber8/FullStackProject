import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgeValidator } from '../../validators/age';
import {Md5} from 'ts-md5/dist/md5';
import * as BcryptJS from "bcryptjs";
@Component({
  selector: 'page-registerUser',
  templateUrl: 'registerUser.html',
})
export class RegisterUserPage {
  formRegister: FormGroup;
 
  constructor(private nav: NavController, public navParams: NavParams, public toastCtrl: ToastController, public fb: FormBuilder, private userService: UserServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
    this.formRegister = this.fb.group({
      name: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Záéíóú ]*'), Validators.required])],
      surname: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Záéíóú ]*'), Validators.required])],
      age: ['', Validators.compose([ AgeValidator.isValid, Validators.required])],
      telephone: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      username: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      password: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
    });
  }
  

  postUser(){
    //var encryptPassword = Md5.hashStr(this.formRegister.get('password').value);
    //var bcrypt = require('bcryptjs');
    //var salt = BcryptJS.genSaltSync(10);
    var hash = BcryptJS.hashSync(this.formRegister.get('password').value, 4);
    var user = {
      name: this.formRegister.get('name').value,
      surname: this.formRegister.get('surname').value,
      age: this.formRegister.get('age').value,
      telephone: this.formRegister.get('telephone').value,
      email: this.formRegister.get('email').value,
      username: this.formRegister.get('username').value,
      password: hash,
    }
    console.log(user);

    this.userService.postUser(user).subscribe(
      (data) => {
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000
        });
        toast.present();
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
  // public createAccount() {
  //   this.nav.push('RegisterPage');
  // }
 
  // public login() {
  //   this.showLoading()
  //   this.auth.login(this.registerCredentials).subscribe(allowed => {
  //     if (allowed) {        
  //       this.nav.setRoot('HomePage');
  //     } else {
  //       this.showError("Access Denied");
  //     }
  //   },
  //     error => {
  //       this.showError(error);
  //     });
  // }
 
  // showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Please wait...',
  //     dismissOnPageChange: true
  //   });
  //   this.loading.present();
  // }
 
  // showError(text) {
  //   this.loading.dismiss();
 
  //   let alert = this.alertCtrl.create({
  //     title: 'Fail',
  //     subTitle: text,
  //     buttons: ['OK']
  //   });
  //   alert.present(prompt);
  // }
}
