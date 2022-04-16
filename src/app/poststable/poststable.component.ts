import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'app/post.service';
import { BlogPost } from 'app/blogpost';
@Component({
  selector: 'app-poststable',
  templateUrl: './poststable.component.html',
  styleUrls: ['./poststable.component.css']
})
export class PoststableComponent implements OnInit {
  post:Array<BlogPost> = [];

  constructor(private pService: PostService, private route: Router) { }

  ngOnInit(): void {
    this.pService.getAllPosts().subscribe(res => {
      this.post = res;
    });
}

  rowClicked(e:Event, id:string){
    this.route.navigate(['/admin/post', id]);
  }

}
