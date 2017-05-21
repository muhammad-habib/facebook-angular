import { Injectable } from '@angular/core';
import {AppSettings} from "../app.setting";
import {AuthService} from "./auth.service";
import {Http} from "@angular/http";

@Injectable()
export class PostsService {

  constructor(
    private http: Http,
    private authService: AuthService) {
  }


  getPosts(): Promise<any>{
    let Url = AppSettings.API_ENDPOINT + '/posts';
    let options = this.authService.jwt();
    return this.http.get(Url,options)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
