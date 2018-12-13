import { Component } from '@angular/core';
import { ManageModelsPage } from '../manageModels/manageModels';
import { ManageAccessoriesPage } from '../manageAccessories/manageAccessories';
import { ManageSparesPage } from '../manageSpares/manageSpares';
// import { HomePage } from '../home/home';
// import {LoginPage} from '../login/login'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = ManageModelsPage;
  tab2Root: any = ManageAccessoriesPage;
  tab3Root: any = ManageSparesPage;
  // tab3Root = ContactPage;

  constructor() {

  }
}
