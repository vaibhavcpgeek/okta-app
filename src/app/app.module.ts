import { UserService } from "./user.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { OktaAuthModule } from "@okta/okta-angular";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import config from "./app.config";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config)
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
