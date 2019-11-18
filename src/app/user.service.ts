import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import config from "./app.config";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private api = `${config.serviceUri}?emailId=${this.getLoginId()}`; // URL to web api
  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<User> {
    return this.http.get<User>(this.api);
  }
  getLoginId() {
    return window.localStorage.getItem("login-id");
  }
}
