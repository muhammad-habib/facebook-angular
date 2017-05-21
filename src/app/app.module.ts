import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FacebookModule} from "ngx-facebook";
import { FacebookComponent } from './facebook/facebook.component';
import { LoginComponent } from './login/login.component';
import {SuiModule} from 'ng2-semantic-ui';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./_services/guard";
import {AuthService} from "./_services/auth.service";
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent,
    LoginComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FacebookModule.forRoot(),
    AppRoutingModule,
    SuiModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
