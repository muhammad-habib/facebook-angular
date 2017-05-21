import { Component, OnInit } from '@angular/core';
import {FacebookService, LoginOptions, LoginResponse} from "ngx-facebook";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css'],
  providers: [AuthService]
})
export class FacebookComponent implements OnInit {

  constructor(private fb: FacebookService, private authenticationService: AuthService) {
    fb.init({
      appId: '385244185170219',
      version: 'v2.8'
    });
  }

  ngOnInit() {
  }




  fbLogin(){

    const options: LoginOptions = {
      scope: 'public_profile,user_friends,email,pages_show_list,user_posts',
      return_scopes: true,
      enable_profile_selector: true
    };
    this.fb.login(options)
      .then((res: LoginResponse) => {
        this.authenticationService.loginFB(res.authResponse.accessToken);
      })
      .catch(this.handleError);
  }

  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }


}
