import { UserService } from "./../user.service";
import { Component } from "@angular/core";
import { OktaAuthService } from "@okta/okta-angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-secure",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  currentUser;
  today: number = Date.now();
  isAuthenticated;
  showNoData = false;

  constructor(
    private service: UserService,
    public oktaAuth: OktaAuthService,
    public router: Router
  ) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.getUser();
  }

  getUser() {
    this.service.getUserDetails().subscribe(
      user => {
        this.currentUser = user;
      },
      err => {
        this.showNoData = true;
      }
    );
  }
  async logout() {
    // Terminates the session with Okta and removes current tokens.
    await this.oktaAuth.logout();
    this.router.navigateByUrl("/login");
  }
}
