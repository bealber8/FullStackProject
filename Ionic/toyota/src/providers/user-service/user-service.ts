import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getModels(){
    return this.http.get("http://192.168.1.38:8080/models");
  }

  get(id){
    return this.http.get("http://192.168.1.38:8080/model" + '/' +id);
  }

  postModel(model){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', model.name);
    urlSearchParams.append('power', model.power);
    urlSearchParams.append('fuel', model.fuel);
    urlSearchParams.append('price', model.price);
    let body = urlSearchParams.toString();

    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return this.http.post("http://192.168.1.38:8080/model", body, options);
  }

  updateModel(model, id){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', model.name);
    urlSearchParams.append('power', model.power);
    urlSearchParams.append('fuel', model.fuel);
    urlSearchParams.append('price', model.price);
    let body = urlSearchParams.toString();

    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return this.http.put("http://192.168.1.38:8080/model/"+ id, body, options);
  }

  deleteModel(id){
    return this.http.delete("http://192.168.1.38:8080/model/" + id, 
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }

  getAccessories(){
    return this.http.get("http://192.168.1.38:8080/accessories");
  }

  getAccessory(id){
    return this.http.get("http://192.168.1.38:8080/accessories" + '/' +id);
  }

  postAccessory(accessory){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', accessory.category);
    urlSearchParams.append('name', accessory.name);
    let body = urlSearchParams.toString();
    console.log(body);
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return this.http.post("http://192.168.1.38:8080/accessory", body, options);
  }

  updateAccessory(accessory, id){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', accessory.category);
    urlSearchParams.append('name', accessory.name);
    let body = urlSearchParams.toString();

    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return this.http.put("http://192.168.1.38:8080/accessory/"+ id, body, options);
  }

  deleteAccessory(id){
    return this.http.delete("http://192.168.1.38:8080/accessory/" + id, 
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }

}
