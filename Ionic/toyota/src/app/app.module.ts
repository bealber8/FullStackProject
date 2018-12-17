import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterUserPage } from '../pages/registerUser/registerUser';
import { ModelsPage } from '../pages/models/models';
import { AccessoriesPage} from '../pages/accessories/accessories';
import { ManageAppPage } from '../pages/manageApp/manageApp';
import { InsertModelsPage } from '../pages/insertModels/insertModels';
import { UpdateModelPage } from '../pages/updateModel/updateModel';
import { ManageModelsPage } from '../pages/manageModels/manageModels';
import { InsertAccessoriesPage } from '../pages/insertAccessories/insertAccessories';
import { UpdateAccessoryPage } from '../pages/updateAccessory/updateAccessory';
import { ManageAccessoriesPage } from '../pages/manageAccessories/manageAccessories';
import {ManageSparesPage} from '../pages/manageSpares/manageSpares';
import { InsertSparesPage } from '../pages/insertSpares/insertSpares'
import {UpdateSparePage} from '../pages/updateSpare/updateSpare';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { FutureModelsPage } from '../pages/futureModels/futureModels';
import { MythicalModelsPage } from '../pages/mythicalModels/mythicalModels';
import {SparesPage} from '../pages/spares/spares';
import { SQLite } from '@ionic-native/sqlite';
import { InsertCardealershipPage } from '../pages/insertCardealership/insertCardealership';
import { ManageCardealershipPage } from '../pages/manageCardealership/manageCardealership';
import { UpdateCardealershipPage } from '../pages/updateCardealership/updateCardealership';
import { ManageSuppliersPage } from '../pages/manageSuppliers/manageSuppliers';
import { InsertSuppliersPage } from '../pages/insertSuppliers/insertSuppliers';
import { UpdateSuppliersPage } from '../pages/updateSuppliers/updateSuppliers';
import { ManageFutureModelsPage } from '../pages/manageFutureModels/manageFutureModels';
import { InsertFutureModelPage } from '../pages/insertFutureModels/insertFutureModel';
import { UpdateFutureModelPage } from '../pages/updateFutureModel/updateFutureModel';
import { ManageMythicalModelsPage } from '../pages/manageMythicalModels/manageMythicalModels';
import { InsertMythicalModelPage } from '../pages/insertMythicalModels/insertMythicalModel';
import { UpdateMythicalModelPage } from '../pages/updateMythicalModel/updateMythicalModel';
import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterUserPage,
    ModelsPage,
    AccessoriesPage,
    ManageAppPage,
    InsertModelsPage,
    ManageModelsPage,
    FutureModelsPage,
    MythicalModelsPage,
    UpdateModelPage,
    InsertAccessoriesPage,
    ManageAccessoriesPage,
    UpdateAccessoryPage,
    ManageSparesPage,
    InsertSparesPage,
    UpdateSparePage,
    TabsPage,
    SparesPage,
    InsertCardealershipPage,
    ManageCardealershipPage,
    UpdateCardealershipPage,
    ManageSuppliersPage,
    InsertSuppliersPage,
    UpdateSuppliersPage,
    ManageFutureModelsPage,
    InsertFutureModelPage,
    UpdateFutureModelPage,
    ManageMythicalModelsPage,
    InsertMythicalModelPage,
    UpdateMythicalModelPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterUserPage,
    ModelsPage,
    AccessoriesPage,
    ManageAppPage,
    InsertModelsPage,
    ManageModelsPage,
    FutureModelsPage,
    MythicalModelsPage,
    UpdateModelPage,
    InsertAccessoriesPage,
    ManageAccessoriesPage,
    UpdateAccessoryPage,
    ManageSparesPage,
    InsertSparesPage,
    UpdateSparePage,
    TabsPage,
    SparesPage,
    InsertCardealershipPage,
    ManageCardealershipPage,
    UpdateCardealershipPage,
    ManageSuppliersPage,
    InsertSuppliersPage,
    UpdateSuppliersPage,
    ManageFutureModelsPage,
    InsertFutureModelPage,
    UpdateFutureModelPage,
    ManageMythicalModelsPage,
    InsertMythicalModelPage,
    UpdateMythicalModelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
