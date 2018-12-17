import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RegisterUserPage } from '../registerUser/registerUser';
import { HomePage } from '../home/home';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  formLogin: FormGroup;
  users: any = [];
  isLoggedIn: boolean = false;
 
  constructor(private nav: NavController, private fbook: Facebook, public fb: FormBuilder, private auth: UserServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
    this.formLogin = this.fb.group({
      username: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      password: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
    });

    fbook.getLoginStatus()
    .then(res => {
      console.log(res.status);
      if(res.status === "connect") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log(e));
  }

  registerUser(){
    this.nav.push(RegisterUserPage, {"parentPage": this});
  }

  loginfb() {
    this.fbook.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  logout() {
    this.fbook.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
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

  // logginFacebook(){
  //   this.auth.logginFacebook();
  // }

  // logginGithub(){
  //   this.auth.logginGithub();
  // }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000
    });
    this.loading.present();
  }

  getUserDetail(userid) {
    this.fbook.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }
 
}
