import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  { path: "", component: LoginComponent},
  {
    path: "admin", component: AdminComponent, canActivate: [AdminGuard],
    children: [
      { path: "", component: AllUsersComponent },
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
