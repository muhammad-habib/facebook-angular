import { Injectable } from '@angular/core';
import {AppSettings} from "../app.setting";
import {User} from "../_models/user";
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";


@Injectable()
export class AuthService {

  currentUser: User;

  constructor(
    private http: Http,
    private router: Router,
  ) { }

  loginFB(token : any){
    return this.http.post(AppSettings.API_ENDPOINT + '/auth/facebook',{ token: token}).toPromise()
      .then((response) => {
        let user = response.json();
        if (user) {
          console.log(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['']);
        }
      })
      .catch((error)=>{

      });

  }

  logout() {
    if (this.getCurrentUser() != null)
    {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
  }


  getCurrentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  isLoggedIn(){
    return (this.getCurrentUser()) ? true : false;
  }

  userAvatarSrc(user){
    if (user.avatar) {
      if (user.facebookID) {
        return user.avatar;
      }else{
        return AppSettings.API_ENDPOINT + '/uploads/' + user.avatar;
      }
    }else{
      return '/src/assets/images/default-avatar.jpg';
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.access_token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.access_token});
      return new RequestOptions({headers: headers});
    }
  }

}
