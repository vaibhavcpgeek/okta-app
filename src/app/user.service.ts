import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private api = "localhost://4200"; // URL to web api
  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<User> {
    return this.http.get<User>(this.api);
  }
}
