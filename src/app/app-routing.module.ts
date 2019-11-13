import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OktaCallbackComponent, OktaAuthGuard } from "@okta/okta-angular";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(["/login"]);
}

const appRoutes: Routes = [
  {
    path: "implicit/callback",
    component: OktaCallbackComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
