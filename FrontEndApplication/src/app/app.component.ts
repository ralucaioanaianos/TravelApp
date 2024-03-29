// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import {MainComponent} from "./main/main.component";
// import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
// import {LoginPageComponent} from "./login-page/login-page.component";
//
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, MainComponent, NavigationBarComponent, LoginPageComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
//
// export class AppComponent {
//   title = 'FrontEndApplication';
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts:any;
  text:any;

  constructor(private service:PostService) {}

  ngOnInit() {

    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        console.log(response);
      });

    // this.text = this.service.getPosts();
    // console.log("miau")
    // console.log(this.posts);
  }

}
