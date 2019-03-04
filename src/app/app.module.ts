import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { VehicleDetailTBLComponent } from './vehicle-detail-tbl/vehicle-detail-tbl.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./services/authService";
import { MsgToastComponent } from './msg-toast/msg-toast.component';
import { DataService } from "./services/toastMsg.service";
import { LogOutComponent } from './log-out/log-out.component';
import { RouterModule, Routes } from '@angular/router';

import { AlwaysAuthGuard } from '../app/services/alwaysAuthGuard';

// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { VehicleDataFormComponent } from './vehicle-data-form/vehicle-data-form.component';
import { VehicleDataTblComponent } from './vehicle-data-tbl/vehicle-data-tbl.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuCardsComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'vehicleDetail', component: VehicleDetailTBLComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'vehicleDataForm', component: VehicleDataFormComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'vehicleDataTbl', component: VehicleDataTblComponent, canActivate: [AlwaysAuthGuard] },
  { path: '**', component: LoginComponent, canActivate: [AlwaysAuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuCardsComponent,
    NotificationsComponent,
    VehicleDetailTBLComponent,
    MsgToastComponent,
    LogOutComponent,
    VehicleDataFormComponent,
    VehicleDataTblComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [AuthService, DataService, AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
