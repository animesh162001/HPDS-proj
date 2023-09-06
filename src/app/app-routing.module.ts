import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FileManagementComponent } from './file-management/file-management.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  {
    path:'', component :WelcomeComponent , pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'upload' , component:FileManagementComponent
  },
  {
    path:'dashboard' , component:DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
