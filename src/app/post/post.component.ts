import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { BlogPost } from '../blogpost';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  blogPosts:Array<BlogPost> = blogData;
  class = 'post col-xl-6';
  constructor() { }

  ngOnInit(): void {
  }

}
