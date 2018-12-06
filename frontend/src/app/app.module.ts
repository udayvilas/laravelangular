import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', component: LoginPageComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
