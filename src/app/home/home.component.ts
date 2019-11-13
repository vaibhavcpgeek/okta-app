import { Component, OnInit } from "@angular/core";
import { OktaAuthService } from "@okta/okta-angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  isAuthenticated;
  constructor(public oktaAuth: OktaAuthService, public router: Router) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  async logout() {
    // Terminates the session with Okta and removes current tokens.
    await this.oktaAuth.logout();
    this.router.navigateByUrl("/login");
  }
}
