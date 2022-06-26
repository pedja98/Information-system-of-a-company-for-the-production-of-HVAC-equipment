import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { DialogMsgComponent } from './components/dialog-msg/dialog-msg.component';
import { EditMyProfileDialogComponent } from './components/edit-my-profile-dialog/edit-my-profile-dialog.component';
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import { HeadOfProcurementComponent } from './components/head-of-procurement/head-of-procurement.component';
import { ProductionManagerComponent } from './components/production-manager/production-manager.component';
import { StorekeeperComponent } from './components/storekeeper/storekeeper.component';
import { ProductionWorkerComponent } from './components/production-worker/production-worker.component';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateWorkOrderDialogComponent } from './components/create-work-order-dialog/create-work-order-dialog.component';
import { WorkOrderDetailsComponent } from './components/work-order-details/work-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    PageNotFoundComponent,
    ChangePasswordComponent,
    MyProfileComponent,
    AllUsersComponent,
    DialogMsgComponent,
    EditMyProfileDialogComponent,
    AddUserDialogComponent,
    ConfirmDialogComponent,
    EditUserDialogComponent,
    HeadOfProcurementComponent,
    ProductionManagerComponent,
    StorekeeperComponent,
    ProductionWorkerComponent,
    WorkOrdersComponent,
    PurchaseOrdersComponent,
    UserDetailsComponent,
    CreateWorkOrderDialogComponent,
    WorkOrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
