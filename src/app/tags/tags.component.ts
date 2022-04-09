import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/post.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Array<string>;
  constructor(private pService: PostService) { }

  ngOnInit(): void {
    this.pService.getTags().subscribe(
      data => this.tags = data
    );
  }

}
