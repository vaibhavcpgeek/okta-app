import { UserService } from "./../user.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-secure",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  currentUser;
  today: number = Date.now();

  constructor(private service: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service.getUserDetails().subscribe(user => {
      this.currentUser = user;
    });
  }
}
