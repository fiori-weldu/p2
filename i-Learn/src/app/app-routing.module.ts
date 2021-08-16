import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common'
import{LoginComponent} from './components/login/login.component';
import{HomePageComponent} from './components/home-page/home-page.component'
import{HomeGuardsGuard } from './guards/home-guards.guard';
const routes: Routes = [{path:'home', component:HomePageComponent , canActivate:[HomeGuardsGuard]},
                        {path:'login', component:LoginComponent},
                      {path:'', redirectTo:'/login', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
