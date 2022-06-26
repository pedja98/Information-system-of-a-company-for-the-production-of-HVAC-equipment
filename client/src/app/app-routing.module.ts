import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductionManagerComponent } from './components/production-manager/production-manager.component';
import { ProductionWorkerComponent } from './components/production-worker/production-worker.component';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';
import { StorekeeperComponent } from './components/storekeeper/storekeeper.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { WorkOrderDetailsComponent } from './components/work-order-details/work-order-details.component';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { HeadOfProcurementGuard } from './guards/head-of-procurement/head-of-procurement.guard';
import { ProductionManagerGuard } from './guards/production-manager/production-manager.guard';
import { ProductionWorkerGuard } from './guards/production-worker/production-worker.guard';
import { StorekeeperGuard } from './guards/storekeeper/storekeeper.guard';

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "admin", component: AdminComponent, canActivate: [AdminGuard],
    children: [
      { path: "", component: AllUsersComponent },
      { path: "my-profile", component: MyProfileComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "users/:id", component: UserDetailsComponent }
    ]
  },

  {
    path: "production-manager", component: ProductionManagerComponent, canActivate: [ProductionManagerGuard],
    children: [
      { path: "", component: WorkOrdersComponent },
      { path: "my-profile", component: MyProfileComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "order/:id", component: WorkOrderDetailsComponent }
    ]
  },

  {
    path: "production-worker", component: ProductionWorkerComponent, canActivate: [ProductionWorkerGuard],
    children: [
      { path: "", component: WorkOrdersComponent },
      { path: "my-profile", component: MyProfileComponent },
      { path: "change-password", component: ChangePasswordComponent },
    ]
  },

  {
    path: "storekeeper", component: StorekeeperComponent, canActivate: [StorekeeperGuard],
    children: [
      { path: "", component: PurchaseOrdersComponent },
      { path: "my-profile", component: MyProfileComponent },
      { path: "change-password", component: ChangePasswordComponent },
    ]
  },

  {
    path: "head-of-procurement", component: StorekeeperComponent, canActivate: [HeadOfProcurementGuard],
    children: [
      { path: "", component: PurchaseOrdersComponent },
      { path: "my-profile", component: MyProfileComponent },
      { path: "change-password", component: ChangePasswordComponent },
    ]
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
