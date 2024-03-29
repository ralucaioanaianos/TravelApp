import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl = 'https://localhost:7047/api/User'
  private loggedInUser: string | undefined;
  private http2 = inject(HttpClient);


  constructor(private http: HttpClient) { }

  login(email: string) {
    // Basic login, no verification
    this.loggedInUser = email;
  }

  register(email: string, password: string) {
    console.log("lala")
    // Assuming you have a field 'email' in the user object
    const user = {
      "id": "0",
      "firstName": "miau",
      "lastName": "miau",
      "email": "string",
      "password": "string",
      "profileImage": "string"
    }
    console.log("kjhgf")

    console.log(this.http.post<any>(this.apiUrl, user));
  }

  getLoggedInUser(): string {
    return <string>this.loggedInUser;
  }
}
