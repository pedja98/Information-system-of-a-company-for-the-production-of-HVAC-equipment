import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { StockkeeperComponent } from './components/stockkeeper/stockkeeper.component';
import { ProductionWorkerComponent } from './components/production-worker/production-worker.component';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateWorkOrderDialogComponent } from './components/create-work-order-dialog/create-work-order-dialog.component';
import { WorkOrderDetailsComponent } from './components/work-order-details/work-order-details.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { NeedingDialogComponent } from './components/needing-dialog/needing-dialog.component';
import { ItemNumberPipe } from './pipes/materials/item-number/item-number.pipe';
import { NamePipe } from './pipes/materials/name/name.pipe';
import { SupplierCodePipe } from './pipes/materials/supplier-code/supplier-code.pipe';
import { SupplierItemNumberPipe } from './pipes/materials/supplier-item-number/supplier-item-number.pipe';
import { ItemCountPipe } from './pipes/materials/item-count/item-count.pipe';
import { CompanyNamePipe } from './pipes/orders/company-name/company-name.pipe';
import { FullnamePipe } from './pipes/orders/fullname/fullname.pipe';
import { DevicePipe } from './pipes/orders/device/device.pipe';
import { StatusPipe } from './pipes/orders/status/status.pipe';
import { OrderDatePipe } from './pipes/orders/order-date/order-date.pipe';
import { NeedsComponent } from './components/needs/needs.component';
import { NeedItemNumberPipe } from './pipes/needs/need-item-number/need-item-number.pipe';
import { NeedMaterialNamePipe } from './pipes/needs/need-material-name/need-material-name.pipe';
import { NeedStatusPipe } from './pipes/needs/need-status/need-status.pipe';
import { NeedStokkeperFullnamePipe } from './pipes/needs/need-stokkeper-fullname/need-stokkeper-fullname.pipe';
import { NeedWorkerFullnamePipe } from './pipes/needs/need-worker-fullname/need-worker-fullname.pipe';
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
    StockkeeperComponent,
    ProductionWorkerComponent,
    WorkOrdersComponent,
    PurchaseOrdersComponent,
    UserDetailsComponent,
    CreateWorkOrderDialogComponent,
    WorkOrderDetailsComponent,
    MaterialsComponent,
    NeedingDialogComponent,
    ItemNumberPipe,
    NamePipe,
    SupplierCodePipe,
    SupplierItemNumberPipe,
    ItemCountPipe,
    CompanyNamePipe,
    FullnamePipe,
    DevicePipe,
    StatusPipe,
    OrderDatePipe,
    NeedsComponent,
    NeedItemNumberPipe,
    NeedMaterialNamePipe,
    NeedStatusPipe,
    NeedStokkeperFullnamePipe,
    NeedWorkerFullnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
