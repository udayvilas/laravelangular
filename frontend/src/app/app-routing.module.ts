import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

const appRoutes: Routes = [
  { path: 'loginpage', component: LoginPageComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: '**', component: LoginPageComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
