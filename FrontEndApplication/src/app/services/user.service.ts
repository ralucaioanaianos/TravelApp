import { Injectable } from '@angular/core';
import {Observable, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private rootURL = 'https://localhost:7047/api';

  getUsers(): Observable<any> {
    return this.http.get(this.rootURL + '/Users');
  }

  addUser(user: User) {
    console.log('miau' + user.firstName);
    let response = this.http.post(this.rootURL + '/Users', user).pipe(
      map((res: any) => {
        return res; // You can modify this if the response needs to be transformed
      })
    );
    response.subscribe((r: any) => {
      console.log(r);
      // Do further processing if needed
    });
  }
}
