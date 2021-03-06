import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { OktaAuthService } from "@okta/okta-angular";
import config from "../app.config";
import * as OktaSignIn from "@okta/okta-signin-widget";

@Component({
  selector: "app-secure",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  signIn;
  widget = new OktaSignIn({
    baseUrl: config.issuer,
    logo: "../../assets/logo.png",
    authParams: {
      pkce: config.pkce
    }
  });
  userProfile;

  constructor(oktaAuth: OktaAuthService, router: Router) {
    this.signIn = oktaAuth;

    // Show the widget when prompted, otherwise remove it from the DOM.
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case "/login":
            break;
          case "/dashboard":
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });
  }

  ngOnInit() {
    this.widget.renderEl(
      {
        el: "#okta-signin-container"
      },
      res => {
        if (res.status === "SUCCESS") {
          this.userProfile = { ...res.user.profile };
          this.saveUser(this.userProfile);
          this.signIn.loginRedirect("/home", {
            sessionToken: res.session.token
          });

          // Hide the widget
          this.widget.hide();
        }
      },
      err => {
        throw err;
      }
    );
  }
  saveUser(user) {
    if (window.localStorage) {
      localStorage.setItem("login-id", user.login);
    }
  }
}
