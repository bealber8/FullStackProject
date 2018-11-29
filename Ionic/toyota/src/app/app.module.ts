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
import { UpdateModelsPage } from '../pages/updateModels/updateModels';
import { UpdateModelPage } from '../pages/updateModel/updateModel';
import { ManageModelsPage } from '../pages/manageModels/manageModels';
import { InsertAccessoriesPage } from '../pages/insertAccessories/insertAccessories';
import { UpdateAccessoriesPage } from '../pages/updateAccessories/updateAccessories';
import { UpdateAccessoryPage } from '../pages/updateAccessory/updateAccessory';
import { ManageAccessoriesPage } from '../pages/manageAccessories/manageAccessories';
import { InsertSparesPage } from '../pages/insertSpares/insertSpares'
import { UserServiceProvider } from '../providers/user-service/user-service';
import { FutureModelsPage } from '../pages/futureModels/futureModels';
import { MythicalModelsPage } from '../pages/mythicalModels/mythicalModels';
import {SparesPage} from '../pages/spares/spares';

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
    UpdateModelsPage,
    UpdateModelPage,
    InsertAccessoriesPage,
    ManageAccessoriesPage,
    UpdateAccessoriesPage,
    UpdateAccessoryPage,
    InsertSparesPage,
    TabsPage,
    SparesPage
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
    UpdateModelsPage,
    UpdateModelPage,
    InsertAccessoriesPage,
    ManageAccessoriesPage,
    UpdateAccessoriesPage,
    UpdateAccessoryPage,
    InsertSparesPage,
    TabsPage,
    SparesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
