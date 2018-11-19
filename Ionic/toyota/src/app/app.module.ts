import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModelsPage } from '../pages/models/models';
import { AccessoriesPage} from '../pages/accessories/accessories';
import { ManageModelsPage } from '../pages/manageModels/manageModels';
import { InsertModelsPage } from '../pages/insertModels/insertModels';
import { UpdateModelsPage } from '../pages/updateModels/updateModels';
import { UpdateModelPage } from '../pages/updateModel/updateModel';
import { DeleteModelsPage } from '../pages/deleteModels/deleteModels';
import { InsertAccessoriesPage } from '../pages/insertAccessories/insertAccessories';
import { UpdateAccessoriesPage } from '../pages/updateAccessories/updateAccessories';
import { UpdateAccessoryPage } from '../pages/updateAccessory/updateAccessory';
import { DeleteAccessoriesPage } from '../pages/deleteAccessories/deleteAccessories';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { FutureModelsPage } from '../pages/futureModels/futureModels';
import { MythicalModelsPage } from '../pages/mythicalModels/mythicalModels';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModelsPage,
    AccessoriesPage,
    ManageModelsPage,
    InsertModelsPage,
    DeleteModelsPage,
    FutureModelsPage,
    MythicalModelsPage,
    UpdateModelsPage,
    UpdateModelPage,
    InsertAccessoriesPage,
    DeleteAccessoriesPage,
    UpdateAccessoriesPage,
    UpdateAccessoryPage
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
    ModelsPage,
    AccessoriesPage,
    ManageModelsPage,
    InsertModelsPage,
    DeleteModelsPage,
    FutureModelsPage,
    MythicalModelsPage,
    UpdateModelsPage,
    UpdateModelPage,
    InsertAccessoriesPage,
    DeleteAccessoriesPage,
    UpdateAccessoriesPage,
    UpdateAccessoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
