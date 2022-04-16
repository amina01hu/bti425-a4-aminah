import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'app/blogpost';
import { PostService } from 'app/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  blogPost:BlogPost;
  tags:string;
  constructor(private pService: PostService, private aRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.pService.getPostbyId(this.aRoute.snapshot.params['id']).subscribe(
      data =>{
        this.blogPost = data;
        this.tags = this.blogPost.tags.toString();
    })
  }

  formSubmit(){
    this.blogPost.tags = [];
    this.tags.split(",").map(tag => {
      this.blogPost.tags.push(tag.trim());
    });
    
    this.pService.updatePostById(this.blogPost._id, this.blogPost).subscribe();
    this.route.navigate(['/admin']);
  }

  deletePost(){
    this.pService.deletePostById(this.blogPost._id).subscribe();
    this.route.navigate(['/admin']);
  }

}
