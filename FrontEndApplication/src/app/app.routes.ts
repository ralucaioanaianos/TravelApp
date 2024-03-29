import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FriendsPageComponent} from "./friends-page/friends-page.component";
import {FriendDetailsComponent} from "./friend-details/friend-details.component";
import {VacationsPageComponent} from "./vacations-page/vacations-page.component";
import {HttpClientModule} from "@angular/common/http";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: MainComponent },
  { path: 'friends', component: FriendsPageComponent},
  { path: 'friend-details/:name', component: FriendDetailsComponent},
  { path: 'vacations', component: VacationsPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
