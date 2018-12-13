import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ModelsPage} from '../pages/models/models';
import { AccessoriesPage} from '../pages/accessories/accessories';
import { ManageAppPage } from '../pages/manageApp/manageApp';
import { FutureModelsPage } from '../pages/futureModels/futureModels';
import { MythicalModelsPage } from '../pages/mythicalModels/mythicalModels';
import { TabsPage } from '../pages/tabs/tabs';
import {UserServiceProvider} from '../providers/user-service/user-service';
import {SparesPage} from '../pages/spares/spares';
import { FuturePage } from '../pages/future/future';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  authorities: string[] = [];

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public toastCtrl: ToastController, public statusBar: StatusBar, public splashScreen: SplashScreen, public provider: UserServiceProvider,  public sqlite: SQLite) {
    this.initializeApp();

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Login', component: LoginPage},
      {title: 'Models', component: ModelsPage},
      {title: 'Accessories', component: AccessoriesPage},
      {title: 'Spares', component: SparesPage},
      {title: 'Manage App', component: ManageAppPage},
      {title: 'Future Models', component: FuturePage},
      {title: 'Future Models', component: FutureModelsPage},
      {title: 'Mythical Models', component: MythicalModelsPage}
    ];
  }

  //   provider.authorities.subscribe(authorities => {
  //     if (!location.hash || !location.hash.startsWith('#/change/')) {
  //       if (authorities && authorities.length > 0) {
  //         this.authorities = authorities;
  //         this.rootPage = HomePage;
  //         this.initializeApp();
  //       }
  //       else {
  //         this.authorities = null
  //         this.rootPage = LoginPage;
  //       }
  //     }
  //   });

  //   this.checkLogin();
    
  // }

  // private checkLogin() {
  //   if (!location.hash || !location.hash.startsWith('#/change/')) {
  //     this.provider.checkLogin().catch(() => {
  //       this.rootPage = LoginPage;
  //     });
  //   }
  // }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // this.createDatabase();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  // private createDatabase(){
  //   this.sqlite.create({
  //     name: 'data.db',
  //     location: 'default'
  //   })
  //   .then((db) => {
  //     this.provider.setDatabase(db);
  //     return this.provider.createTable();
  //   })
  //   .then(() => {
  //     this.splashScreen.hide();
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     console.error(error);
  //     const toast = this.toastCtrl.create({
  //       message: 'no furula: ' + JSON.stringify(error),
  //       duration: 3000
  //     });
  //     toast.present();
  //   })
  // }
}

