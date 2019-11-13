import { Injectable } from "@angular/core";
import { User } from "./user";
import { Observable, of } from "rxjs";

const user: User = {
  firstname: "Jhon",
  lastname: "Paul",
  dob: "23/04/1985"
};
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUserDetails(): Observable<User> {
    return of(user);
  }
}
