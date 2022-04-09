import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blogpost';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-latestposts',
  templateUrl: './latestposts.component.html',
  styleUrls: ['./latestposts.component.css']
})
export class LatestpostsComponent implements OnInit {
  post: Array<BlogPost>;
  constructor(private pService: PostService) { }

  ngOnInit(): void {
    this.pService.getPosts(1, null, null).subscribe(
      data => this.post = data.slice(0, 3)
    );

  }

}
