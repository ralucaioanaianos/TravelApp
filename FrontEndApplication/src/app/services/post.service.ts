import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://localhost:7047/api/Users/';

  constructor(private httpClient: HttpClient) { }

  getPosts(){

    let lala =  this.httpClient.get(this.url);
    console.log("aici" + lala);
    return lala;
  }



}
