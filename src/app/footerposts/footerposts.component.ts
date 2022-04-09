import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'app/blogpost';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-footerposts',
  templateUrl: './footerposts.component.html',
  styleUrls: ['./footerposts.component.css']
})
export class FooterpostsComponent implements OnInit {
  post: Array<BlogPost>;
  test: Array<BlogPost>;
  constructor(private pService: PostService) { }

  ngOnInit(): void {
    this.pService.getPosts(1, null, null).subscribe(
      data => this.post = data.slice(0, 3)
    );

  }
}
