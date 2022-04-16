import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/post.service';
import { Router } from "@angular/router";
import { BlogPost } from 'app/blogpost';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  blogPost:BlogPost = new BlogPost();
  tags:string = "";
  constructor(private pService: PostService, private router:Router) { }

  ngOnInit(): void {
  }
  
  formSubmit(){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "BTI425 Student";
    this.blogPost.views = 0;
    this.pService.newPost(this.blogPost).subscribe();
    this.router.navigate(['admin']);
  }

}
