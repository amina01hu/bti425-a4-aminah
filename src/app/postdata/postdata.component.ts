import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blogpost';
@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {
  @Input() post: BlogPost;
  constructor() { }

  ngOnInit(): void {
  }

}
