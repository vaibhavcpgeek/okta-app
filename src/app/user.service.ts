import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private api = `http://localhost:8091/customer?${this.getLoginId()}`; // URL to web api
  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<User> {
    return this.http.get<User>(this.api);
  }
  getLoginId() {
    return window.localStorage.getItem("login-id");
  }
}
