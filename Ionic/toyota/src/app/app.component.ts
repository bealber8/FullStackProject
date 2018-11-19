import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ModelsPage} from '../pages/models/models';
import { AccessoriesPage} from '../pages/accessories/accessories';
import { ManageModelsPage } from '../pages/manageModels/manageModels';
import { FutureModelsPage } from '../pages/futureModels/futureModels';
import { MythicalModelsPage } from '../pages/mythicalModels/mythicalModels';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Models', component: ModelsPage},
      {title: 'Accessories', component: AccessoriesPage},
      {title: 'Manage Models and Accessories', component: ManageModelsPage},
      {title: 'Future Models', component: FutureModelsPage},
      {title: 'Mythical Models', component: MythicalModelsPage}
    ];
    
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

