import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ReplaySubject, Observable} from 'rxjs';
import { Loading, LoadingController, ToastController } from 'ionic-angular';
import { catchError } from 'rxjs/operators';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
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
  baseUrl = 'http://192.168.1.41:8080';
  db: SQLiteObject = null;
  modelos: any[] = [];
  generatedSqlQuery: string;
  private isOpen: boolean;

  constructor(public http: HttpClient, public toastCtrl: ToastController, public sqlite: SQLite, public loadingCtrl: LoadingController) {
    console.log('Hello UserServiceProvider Provider');
    if(!this.isOpen){
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
      .then((db) => {
        this.setDatabase(db);
        // let sqldelete = 'DROP TABLE models';
        // this.db.executeSql(sqldelete, []);
        // let sqdelete = 'DROP TABLE accessories';
        // this.db.executeSql(sqdelete, []);
        // let sql = 'DROP TABLE spares';
        // this.db.executeSql(sql, []);
        // let sql1 = 'DROP TABLE supp_models';
        // this.db.executeSql(sql1, []);
        // let sql2 = 'DROP TABLE supp_accessory';
        // this.db.executeSql(sql2, []);
        // let sql3 = 'DROP TABLE supp_spare';
        // this.db.executeSql(sql3, []);
        // let sql4 = 'DROP TABLE futuremodels';
        // this.db.executeSql(sql4, []);
        // let sql5 = 'DROP TABLE mythicalmodels';
        // this.db.executeSql(sql5, []);
        this.createTables();
        this.isOpen = true;
        const toast = this.toastCtrl.create({
          message: 'funcionó creación db ',
          duration: 3000
        });
        toast.present();
      })
      .catch(error => {
        console.log(error);
        console.error(error);
        const toast = this.toastCtrl.create({
          message: 'no furula: ' + JSON.stringify(error),
          duration: 3000
        });
        toast.present();
      })
    }
  }
  

  // async checkLogin(){
  //   const response = await fetch('http://192.168.56.1:8080/authenticate', {credentials: 'include'});
  //   if(response.status === 200){
  //     const authorities = await response.text();
  //     this.authorities.next(authorities.split(','));
  //   }
  //   else {
  //     this.authorities.next(null);
  //   }
  // }

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  createTables(){
    let sqlCardealership = 'CREATE TABLE IF NOT EXISTS cardealership(id INTEGER PRIMARY KEY AUTOINCREMENT, direction TEXT, telephone TEXT)';
    this.db.executeSql(sqlCardealership, []);
    let sqlSuppliers = 'CREATE TABLE IF NOT EXISTS suppliers(id INTEGER PRIMARY KEY AUTOINCREMENT, nif TEXT, name TEXT, direction TEXT, telephone TEXT)';
    this.db.executeSql(sqlSuppliers, []);
    let sqlModels = 'CREATE TABLE IF NOT EXISTS models(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, power INTEGER, fuel TEXT, price REAL, image TEXT, supplier_id INTEGER, cardealership_id INTEGER, FOREIGN KEY (cardealership_id) REFERENCES cardealership (id) ON DELETE CASCADE ON UPDATE CASCADE)';
    this.db.executeSql(sqlModels, [])
    let sqlAccessories = 'CREATE TABLE IF NOT EXISTS accessories(id INTEGER PRIMARY KEY AUTOINCREMENT, category TEXT, name TEXT, image TEXT, supplier_id INTEGER, cardealership_id INTEGER, FOREIGN KEY (cardealership_id) REFERENCES cardealership (id) ON DELETE CASCADE ON UPDATE CASCADE)';
    this.db.executeSql(sqlAccessories, []);
    let sqlSpares = 'CREATE TABLE IF NOT EXISTS spares(id INTEGER PRIMARY KEY AUTOINCREMENT, category TEXT, name TEXT, reference TEXT, image TEXT, supplier_id INTEGER, cardealership_id INTEGER, FOREIGN KEY (cardealership_id) REFERENCES cardealership (id) ON DELETE CASCADE ON UPDATE CASCADE)';
    this.db.executeSql(sqlSpares, []);
    let sqlSupp_models = 'CREATE TABLE IF NOT EXISTS supp_models(supplier_id INTEGER, model_id INTEGER, PRIMARY KEY (supplier_id, model_id), FOREIGN KEY (supplier_id) REFERENCES suppliers (id) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (model_id) REFERENCES models (id) ON DELETE CASCADE ON UPDATE CASCADE)';
    this.db.executeSql(sqlSupp_models, []);
    let sqlSupp_accessory = 'CREATE TABLE IF NOT EXISTS supp_accessory(supplier_id INTEGER, accessory_id INTEGER, PRIMARY KEY (supplier_id, accessory_id), FOREIGN KEY (supplier_id) REFERENCES suppliers (id) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (accessory_id) REFERENCES accessories (id) ON DELETE CASCADE ON UPDATE CASCADE)';
    this.db.executeSql(sqlSupp_accessory, []);
    let sqlSupp_spare = 'CREATE TABLE IF NOT EXISTS supp_spare(supplier_id INTEGER, spare_id INTEGER, PRIMARY KEY (supplier_id, spare_id), FOREIGN KEY (supplier_id) REFERENCES suppliers (id) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (spare_id) REFERENCES spares (id) ON DELETE CASCADE ON UPDATE CASCADE)';
    this.db.executeSql(sqlSupp_spare, []);
    let sqlFutureModels = 'CREATE TABLE IF NOT EXISTS futuremodels(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, image TEXT, cardealership_id INTEGER, FOREIGN KEY (cardealership_id) REFERENCES cardealership (id) ON DELETE CASCADE ON UPDATE CASCADE)';
    this.db.executeSql(sqlFutureModels, []);
    let sqlMythicalModels = 'CREATE TABLE IF NOT EXISTS mythicalmodels(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, image TEXT, cardealership_id INTEGER, FOREIGN KEY (cardealership_id) REFERENCES cardealership (id) ON DELETE CASCADE ON UPDATE CASCADE)';
    this.db.executeSql(sqlMythicalModels, [])
    .catch(error => {
      console.log(error);
      console.error(error);
      const toast = this.toastCtrl.create({
        message: 'no furula: ' + JSON.stringify(error),
        duration: 10000
      });
      toast.present();
    });
  }

  getCardealership(){
    let sql = 'SELECT * FROM cardealership';
    return this.db.executeSql(sql, [])
    .then(response => {
      let cardealership = [];
      for(let index = 0; index < response.rows.length; index++){
        cardealership.push(response.rows.item(index));
      }
      return Promise.resolve(cardealership);
    })
    .catch(error => Promise.reject(error));
  }

  postCardealership(dir: any, tel: any){
    let sql = 'INSERT INTO cardealership(direction, telephone) VALUES(?,?)';
    return this.db.executeSql(sql, [dir, tel]);
  }

  updateCardealership(car:any, id: number){
    let sql = 'UPDATE cardealership SET direction=?, telephone=? WHERE id=?';
    return this.db.executeSql(sql, [car.direction, car.telephone, id]);
  }

  deleteCardealership(id){
    let sql = 'DELETE FROM cardealership WHERE id=?';
    return this.db.executeSql(sql, [id]);
  }

  getSuppliers(){
    let sql = 'SELECT * FROM suppliers';
    return this.db.executeSql(sql, [])
    .then(response => {
      let suppliers = [];
      for(let index = 0; index < response.rows.length; index++){
        suppliers.push(response.rows.item(index));
      }
      return Promise.resolve(suppliers);
    })
    .catch(error => Promise.reject(error));
  }

  postSuppliers(nif: any, name: any, direction: any, telephone: any){
    let sql = 'INSERT INTO suppliers(nif, name, direction, telephone) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [nif, name, direction, telephone]);
  }

  updateSupplier(supplier:any, id: number){
    let sql = 'UPDATE suppliers SET nif=?, name=?, direction=?, telephone=? WHERE id=?';
    return this.db.executeSql(sql, [supplier.nif, supplier.name, supplier.direction, supplier.telephone, id]);
  }

  deleteSupplier(id){
    let sql = 'DELETE FROM suppliers WHERE id=?';
    return this.db.executeSql(sql, [id]);
  }

  getModelsSQL(){
    let sql = 'SELECT * FROM models';
    return this.db.executeSql(sql, [])
    .then(response => {
      let models = [];
      for(let index = 0; index < response.rows.length; index++){
        models.push(response.rows.item(index));
      }
      return Promise.resolve(models);
    })
    .catch(error => Promise.reject(error));
  }

  postModelSQL(model:any){
    let sql = 'INSERT INTO models(name, power, fuel, price, image, supplier_id, cardealership_id) VALUES(?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [model.name, model.power, model.fuel, model.price, model.image, model.suppliers, model.cardealership_id]);
  }

  updateModelSQL(model:any, id: number){
    let sql = 'UPDATE models SET name=?, power=?, fuel=?, price=?, image=?, supplier_id=?, cardealership_id=? WHERE id=?';
    return this.db.executeSql(sql, [model.name, model.power, model.fuel, model.price, model.image, model.suppliers, model.cardealership_id, id]);
  }

  deleteModelsSQL(id: any){
    let sql = 'DELETE FROM models WHERE id=?';
    return this.db.executeSql(sql, [id]);
  }

  insertSupModSQL(model: any){
    let sql = 'INSERT INTO supp_models SELECT supplier_id, id FROM models WHERE name=?';
    return this.db.executeSql(sql, [model.name]).catch(error => {
      console.log(error);
      console.error(error);
      const toast = this.toastCtrl.create({
        message: 'no inserta relacion many: ' + JSON.stringify(error),
        duration: 10000
      });
      toast.present();
    });
  }

  getSupModeSQL(){
    let sql = 'SELECT * FROM supp_models';
    return this.db.executeSql(sql, [])
    .then(response => {
      let models = [];
      for(let index = 0; index < response.rows.length; index++){
        models.push(response.rows.item(index));
      }
      return Promise.resolve(models);
    })
    .catch(error => Promise.reject(error));
  }

  deleteSupModSQL(id: any){
    let sql = 'DELETE FROM supp_models WHERE model_id=?';
    return this.db.executeSql(sql, [id]);
  }

  getAccessoriesSQL(){
    let sql = 'SELECT * FROM accessories';
    return this.db.executeSql(sql, [])
    .then(response => {
      let accessories = [];
      for(let index = 0; index < response.rows.length; index++){
        accessories.push(response.rows.item(index));
      }
      return Promise.resolve(accessories);
    })
    .catch(error => Promise.reject(error));
  }

  postAccessorySQL(accessory: any){
    let sql = 'INSERT INTO accessories(category, name, image, supplier_id, cardealership_id) VALUES(?,?,?,?,?)';
    return this.db.executeSql(sql, [accessory.category, accessory.name, accessory.image, accessory.suppliers, accessory.cardealership_id]);
  }

  updateAccessorySQL(accessory: any, id: number){
    let sql = 'UPDATE accessories SET category=?, name=?, image=?, supplier_id=?, cardealership_id=? WHERE id=?';
    return this.db.executeSql(sql, [accessory.category, accessory.name, accessory.image, accessory.suppliers, accessory.cardealership_id, id]);
  }

  deleteAccessorySQL(id){
    let sql = 'DELETE FROM accessories WHERE id=?';
    return this.db.executeSql(sql, [id]);
  }

  insertSupAccSQL(accessory: any){
    let sql = 'INSERT INTO supp_accessory SELECT supplier_id, id FROM accessories WHERE name=?';
    return this.db.executeSql(sql, [accessory.name]).catch(error => {
      console.log(error);
      console.error(error);
      const toast = this.toastCtrl.create({
        message: 'no inserta relacion many: ' + JSON.stringify(error),
        duration: 10000
      });
      toast.present();
    });
  }

  getSupAccSQL(){
    let sql = 'SELECT * FROM supp_accessory';
    return this.db.executeSql(sql, [])
    .then(response => {
      let models = [];
      for(let index = 0; index < response.rows.length; index++){
        models.push(response.rows.item(index));
      }
      return Promise.resolve(models);
    })
    .catch(error => Promise.reject(error));
  }

  deleteSupAccSQL(id: any){
    let sql = 'DELETE FROM supp_accessory WHERE accessory_id=?';
    return this.db.executeSql(sql, [id]);
  }

  getSparesSQL(){
    let sql = 'SELECT * FROM spares';
    return this.db.executeSql(sql, [])
    .then(response => {
      let spares = [];
      for(let index = 0; index < response.rows.length; index++){
        spares.push(response.rows.item(index));
      }
      return Promise.resolve(spares);
    })
    .catch(error => Promise.reject(error));
  }

  postSparesSQL(spare: any){
    let sql = 'INSERT INTO spares(category, name, reference, image, supplier_id, cardealership_id) VALUES(?,?,?,?,?,?)';
    return this.db.executeSql(sql, [spare.category, spare.name, spare.reference, spare.image, spare.suppliers, spare.cardealership_id]);
  }

  updateSpareSQL(spare: any, id:number){
    let sql = 'UPDATE spares SET category=?, name=?, reference=?, image=?, supplier_id=?, cardealership_id=? WHERE id=?';
    return this.db.executeSql(sql, [spare.category, spare.name, spare.reference, spare.image, spare.suppliers, spare.cardealership_id, id]);
  }

  deleteSpareSQL(id){
    let sql = 'DELETE FROM spares WHERE id=?';
    return this.db.executeSql(sql, [id]);
  }

  insertSupSpareSQL(spare: any){
    let sql = 'INSERT INTO supp_spare SELECT supplier_id, id FROM spares WHERE name=?';
    return this.db.executeSql(sql, [spare.name]).catch(error => {
      console.log(error);
      console.error(error);
      const toast = this.toastCtrl.create({
        message: 'no inserta relacion many: ' + JSON.stringify(error),
        duration: 10000
      });
      toast.present();
    });
  }

  getSupSpareSQL(){
    let sql = 'SELECT * FROM supp_spare';
    return this.db.executeSql(sql, [])
    .then(response => {
      let spares = [];
      for(let index = 0; index < response.rows.length; index++){
        spares.push(response.rows.item(index));
      }
      return Promise.resolve(spares);
    })
    .catch(error => Promise.reject(error));
  }

  deleteSupSpareSQL(id: any){
    let sql = 'DELETE FROM supp_spare WHERE spare_id=?';
    return this.db.executeSql(sql, [id]);
  }

  getFutureModelsSQL(){
    let sql = 'SELECT * FROM futuremodels';
    return this.db.executeSql(sql, [])
    .then(response => {
      let futuremodels = [];
      for(let index = 0; index < response.rows.length; index++){
        futuremodels.push(response.rows.item(index));
      }
      return Promise.resolve(futuremodels);
    })
    .catch(error => Promise.reject(error));
  }

  postFutureModelSQL(model: any){
    let sql = 'INSERT INTO futuremodels(name, description, image, cardealership_id) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [model.name, model.description, model.image, model.cardealership_id]);
  }

  updateFutureModelSQL(model: any, id: number){
    let sql = 'UPDATE futuremodels SET name=?, description=?, image=?, cardealership_id=? WHERE id=?';
    return this.db.executeSql(sql, [model.name, model.description, model.image, model.cardealership_id, id]);
  }

  deleteFutureModelSQL(id){
    let sql = 'DELETE FROM futuremodels WHERE id=?';
    return this.db.executeSql(sql, [id]);
  }

  getMythicalModelsSQL(){
    let sql = 'SELECT * FROM mythicalmodels';
    return this.db.executeSql(sql, [])
    .then(response => {
      let mythicalmodels = [];
      for(let index = 0; index < response.rows.length; index++){
        mythicalmodels.push(response.rows.item(index));
      }
      return Promise.resolve(mythicalmodels);
    })
    .catch(error => Promise.reject(error));
  }

  postMythicalModelSQL(model: any){
    let sql = 'INSERT INTO mythicalmodels(name, description, image, cardealership_id) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [model.name, model.description, model.image, model.cardealership_id]);
  }

  updateMythicalModelSQL(model: any, id: number){
    let sql = 'UPDATE mythicalmodels SET name=?, description=?, image=?, cardealership_id=? WHERE id=?';
    return this.db.executeSql(sql, [model.name, model.description, model.image, model.cardealership_id, id]);
  }

  deleteMythicalModelSQL(id){
    let sql = 'DELETE FROM mythicalmodels WHERE id=?';
    return this.db.executeSql(sql, [id]);
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

  postUser(user){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', user.name);
    urlSearchParams.append('surname', user.surname);
    urlSearchParams.append('age', user.age);
    urlSearchParams.append('telephone', user.telephone);
    urlSearchParams.append('email', user.email);
    urlSearchParams.append('username', user.username);
    urlSearchParams.append('password', user.password);
    let body = urlSearchParams.toString();

    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    };
    return this.http.post(this.baseUrl + "/users", body, options);
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

  getFutureModels(){
    return this.http.get(this.baseUrl + "/futuremodelsimage/1");
  }

  getModels(){
    console.log(this.modelos);
    return this.http.get(this.baseUrl + "/models");
  }

  // createSqlQuery(tableName: string, columns: string[], obj: any) {
  //   this.generatedSqlQuery = `INSERT INTO ${tableName} `
  //   let columnList = "";
  //   columnList = columnList + "("
  //   for (let index = 0; index < columns.length; index++) {
  //     if (index == columns.length - 1) {
  //       columnList = columnList + columns[index];
  //     } else {
  //       columnList = columnList + columns[index] + ",";
  //     }
  //   }
  //   this.generatedSqlQuery = this.generatedSqlQuery + columnList + ") VALUES ";

  //   for (let index = 0; index < obj.length; index++) {
  //     let item = obj[index];

  //     if (index == columns.length - 1) {
  //       this.generatedSqlQuery = this.generatedSqlQuery + "(";
  //       for (var key in obj[index]) {
  //         if (obj[index].hasOwnProperty(key)) {
  //           var val = obj[index][key];
  //           this.generatedSqlQuery = this.generatedSqlQuery + val + ",";
  //         }
  //       }
  //       this.generatedSqlQuery = this.generatedSqlQuery.slice(0, -1);
  //       this.generatedSqlQuery = this.generatedSqlQuery + ")";
  //       if (index == columns.length - 1) {
  //         this.generatedSqlQuery = this.generatedSqlQuery + ",";
  //       }
  //       if (obj.length == 1) {
  //         this.generatedSqlQuery = this.generatedSqlQuery.slice(0, -1);
  //       }
  //     } else {
  //       this.generatedSqlQuery = this.generatedSqlQuery + "(";
  //       let length = 0;
  //       for (var key in obj[index]) {
  //         length++;
  //       }
  //       for (var key in obj[index]) {
  //         if (obj[index].hasOwnProperty(key)) {
  //           var val = obj[index][key];
  //           this.generatedSqlQuery = this.generatedSqlQuery + val + ",";
  //         }
  //       }
  //       this.generatedSqlQuery = this.generatedSqlQuery.slice(0, -1);
  //       this.generatedSqlQuery = this.generatedSqlQuery + "),";
  //       if (obj.length == 1) {
  //         this.generatedSqlQuery = this.generatedSqlQuery.slice(0, -1);
  //       }
        
  //     }
  //   }
  //   if (obj.length > 1) {
  //     this.generatedSqlQuery = this.generatedSqlQuery.slice(0, -1);
  //   }
  //   console.log(this.generatedSqlQuery);
  //   return this.generatedSqlQuery;
  // }

  get(id){
    return this.http.get(this.baseUrl + "/model" + '/' +id);
  }

  postModel(model, id){
    console.log(model);
    console.log(this.username, this.password);
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', model.name);
    urlSearchParams.append('power', model.power);
    urlSearchParams.append('fuel', model.fuel);
    urlSearchParams.append('price', model.price);
    urlSearchParams.append('suppliers', model.suppliers);
    let body = urlSearchParams.toString();

    let options = this.getOptions();
    return this.http.post(this.baseUrl + "/cardealership/"+id+"/model", body, options);
  }

  updateModel(model:any, modelId: number): Observable<any> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', model.name);
    urlSearchParams.append('power', model.power);
    urlSearchParams.append('fuel', model.fuel);
    urlSearchParams.append('price', model.price);
    let body = urlSearchParams.toString();

    let options = this.getOptions();
    return this.http.put(this.baseUrl + "/model/"+ modelId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  deleteModel(id){
    let options = this.getOptions();
    return this.http.delete(this.baseUrl + "/model/" + id, options);
  }

  getAccessories(){
    return this.http.get(this.baseUrl + "/accessories");
  }

  getAccessory(id){
    return this.http.get(this.baseUrl + "/accessories" + '/' +id);
  }

  postAccessory(accessory, id): Observable<any>{
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', accessory.category);
    urlSearchParams.append('name', accessory.name);
    urlSearchParams.append('suppliers', accessory.suppliers);
    let body = urlSearchParams.toString();
    console.log(body);
    let options = this.getOptions();
    return this.http.post(this.baseUrl + "/cardealership/"+id+"/accessory", body, options).pipe(
      catchError(this.handleError));
  }

  updateAccessory(accessory: any, accessoryId: number):Observable<any>{
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', accessory.category);
    urlSearchParams.append('name', accessory.name);
    let body = urlSearchParams.toString();

    let options = this.getOptions();
    return this.http.put(this.baseUrl + "/accessory/"+ accessoryId, body, options).pipe(
      catchError(this.handleError));
  }

  deleteAccessory(id){
    let options = this.getOptions();
    return this.http.delete(this.baseUrl + "/accessory/" + id, options);
  }

  getSpares(){
    return this.http.get(this.baseUrl + "/spares");
  }

  getSpare(id){
    return this.http.get(this.baseUrl + "/spares" + '/' +id);
  }

  postSpares(spare, id): Observable<any>{
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', spare.category);
    urlSearchParams.append('name', spare.name);
    urlSearchParams.append('reference', spare.reference);
    urlSearchParams.append('suppliers', spare.suppliers);
    let body = urlSearchParams.toString();
    console.log(body);
    let options = this.getOptions();
    return this.http.post(this.baseUrl +"/cardealership/"+id+ "/spare", body, options).pipe(
      catchError(this.handleError));
  }

  updateSpares(spare: any, spareId: number):Observable<any>{
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('category', spare.category);
    urlSearchParams.append('name', spare.name);
    urlSearchParams.append('reference', spare.reference);
    let body = urlSearchParams.toString();

    let options = this.getOptions();
    return this.http.put(this.baseUrl + "/spare/"+ spareId, body, options).pipe(
      catchError(this.handleError));
  }

  deleteSpares(id){
    let options = this.getOptions();
    return this.http.delete(this.baseUrl + "/spare/" + id, options);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    console.log('hola');
    console.log(error.status);
    console.log(error.statusText);
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
