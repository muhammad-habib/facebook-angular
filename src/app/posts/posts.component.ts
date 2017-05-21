import { Component, OnInit } from '@angular/core';
import {PostsService} from "../_services/posts.service";
import {AuthService} from "../_services/auth.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})

export class PostsComponent implements OnInit {
  public posts: any;
  constructor(
    private postServ: PostsService,
    private _auth: AuthService,
    private http: Http,

  ) {}

  ngOnInit(): void{
    this.getPosts();
  }

  getPosts(): void {
    this.postServ.getPosts().then((res=>{
      this.posts = res;
    }));
  }
}
