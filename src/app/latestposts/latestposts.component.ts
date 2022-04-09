import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blogpost';

@Component({
  selector: 'app-latestposts',
  templateUrl: './latestposts.component.html',
  styleUrls: ['./latestposts.component.css']
})
export class LatestpostsComponent implements OnInit {
  @Input() post: Array<BlogPost>;
  constructor() { }

  ngOnInit(): void {
  }

}
