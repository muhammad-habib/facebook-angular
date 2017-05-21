import {Component, OnInit} from '@angular/core';
import {AuthService} from "./_services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(
    private _auth: AuthService
  ) {}

  ngOnInit() {
    console.log(this._auth.getCurrentUser());
  }


}
