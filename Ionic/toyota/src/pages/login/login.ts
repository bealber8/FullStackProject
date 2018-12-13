import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RegisterUserPage } from '../registerUser/registerUser';
import { HomePage } from '../home/home';
 
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
    this.nav.push(RegisterUserPage, {"parentPage": this});
  }

  // async login(value: { username: string, password: string, rememberMe: boolean }) {
  //   const loading = this.auth.showLoading('Logging in');

    

  //   if (user === null) {
  //     this.showLoginFailedToast();
  //   }
  // }

  private showLoginFailedToast() {
    console.log('Login failed');
  }


 
  // public createAccount() {
  //   this.nav.push('RegisterPage');
  // }
 
  public login() {
    var username= this.formLogin.get('username').value;
    var password = this.formLogin.get('password').value;
    this.showLoading()  
    this.auth.login(username, password);  
    this.nav.setRoot(HomePage);
  
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000
    });
    this.loading.present();
  }
 
}
