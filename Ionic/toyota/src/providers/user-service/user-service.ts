import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ReplaySubject, Observable} from 'rxjs';
import { Loading, LoadingController } from 'ionic-angular';
import { catchError } from 'rxjs/operators';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  username: any;
  password: any;
  authorities = new ReplaySubject<string[]>(1);

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello UserServiceProvider Provider');
  }

  async checkLogin(){
    const response = await fetch('http://192.168.56.1:8080/authenticate', {credentials: 'include'});
    if(response.status === 200){
      const authorities = await response.text();
      this.authorities.next(authorities.split(','));
    }
    else {
      this.authorities.next(null);
    }
  }

  login(username, password){
    this.username = username;
    this.password = password;
    console.log(this.username, this.password);
  }

  getOptions(){
    let user = this.username;
    let pwd = this.password;
    let base64UserAndPassword = window.btoa(user + ":" + pwd);

    let basico = 'basic ' + base64UserAndPassword;

    let options = {
      headers: {
        'Authorization': basico,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    };
    return options;
  }

  // async login(username: string, password: string): Promise<string>{
  //   const response = await fetch('http://192.168.56.1:8080/authenticate', {
  //     credentials: 'include',
  //     method: 'POST',
  //     body: 'username=${username}&password=${password}',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   });

  //   if(response.ok){
  //     const authorities = await response.text();
  //     if(authorities){
  //       this.authorities.next(authorities.split(','));
  //       return authorities;
  //     }
  //     else {
  //       this.authorities.next(null);
  //     }
  //   }
  //   else {
  //     this.authorities.next(null);
  //   }
  //   return null;
  // }

  showLoading(message: string = 'Working'): Loading {
    const loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: `${message} ...`
    });

    loading.present();
    return loading;
  }

  getModels(){
    return this.http.get("http://192.168.1.41:8080/models");
  }

  get(id){
    return this.http.get("http://192.168.1.41:8080/model" + '/' +id);
  }

  postModel(model): Observable<any>{
    console.log(this.username, this.password);
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', model.name);
    urlSearchParams.append('power', model.power);
    urlSearchParams.append('fuel', model.fuel);
    urlSearchParams.append('price', model.price);
    let body = urlSearchParams.toString();

    let options = this.getOptions();
    return this.http.post("http://192.168.1.41:8080/model", body, options).pipe(
      catchError(this.handleError));
  }

  updateModel(model:any, modelId: number): Observable<any> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', model.name);
    urlSearchParams.append('power', model.power);
    urlSearchParams.append('fuel', model.fuel);
    urlSearchParams.append('price', model.price);
    let body = urlSearchParams.toString();

    let options = this.getOptions();
    return this.http.put("http://192.168.1.41:8080/model/"+ modelId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  deleteModel(id){
    let options = this.getOptions();
    return this.http.delete("http://192.168.1.41:8080/model/" + id, options);
  }

  getAccessories(){
    return this.http.get("http://192.168.1.41:8080/accessories");
  }

  getAccessory(id){
    return this.http.get("http://192.168.1.41:8080/accessories" + '/' +id);
  }

  postAccessory(accessory){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', accessory.category);
    urlSearchParams.append('name', accessory.name);
    let body = urlSearchParams.toString();
    console.log(body);
    let options = this.getOptions();
    return this.http.post("http://192.168.1.41:8080/accessory", body, options);
  }

  updateAccessory(accessory: any, accessoryId: number):Observable<any>{
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', accessory.category);
    urlSearchParams.append('name', accessory.name);
    let body = urlSearchParams.toString();

    let options = this.getOptions();
    return this.http.put("http://192.168.1.41:8080/accessory/"+ accessoryId, body, options).pipe(
      catchError(this.handleError));
  }

  deleteAccessory(id){
    let options = this.getOptions();
    return this.http.delete("http://192.168.1.41:8080/accessory/" + id, options);
  }

  getSpares(){
    return this.http.get("http://192.168.1.41:8080/spares");
  }

  getSpare(id){
    return this.http.get("http://192.168.1.41:8080/spares" + '/' +id);
  }

  postSpares(spare){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', spare.category);
    urlSearchParams.append('name', spare.name);
    urlSearchParams.append('reference', spare.reference);
    let body = urlSearchParams.toString();
    console.log(body);
    let options = this.getOptions();
    return this.http.post("http://192.168.1.41:8080/spare", body, options);
  }

  updateSpares(spare: any, spareId: number):Observable<any>{
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', spare.category);
    urlSearchParams.append('name', spare.name);
    urlSearchParams.append('reference', spare.reference);
    let body = urlSearchParams.toString();

    let options = this.getOptions();
    return this.http.put("http://192.168.1.41:8080/spare/"+ spareId, body, options).pipe(
      catchError(this.handleError));
  }

  deleteSpares(id){
    let options = this.getOptions();
    return this.http.delete("http://192.168.1.41:8080/spare/" + id, options);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
