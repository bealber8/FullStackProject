import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RegisterUserPage } from '../registerUser/registerUser';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  formLogin: FormGroup;
 
  constructor(private nav: NavController, public fb: FormBuilder, private auth: UserServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
    this.formLogin = this.fb.group({
      username: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      password: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
    });
  }

  registerUser(){
    this.nav.push(RegisterUserPage);
  }

  async login(value: { username: string, password: string, rememberMe: boolean }) {
    const loading = this.auth.showLoading('Logging in');

    const user = await this.auth.login(value.username, value.password)
      .catch(() => this.showLoginFailedToast());
    loading.dismiss();

    if (user === null) {
      this.showLoginFailedToast();
    }
  }

  private showLoginFailedToast() {
    console.log('Login failed');
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
