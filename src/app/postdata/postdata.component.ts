import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blogpost';
import { PostService } from 'app/post.service';
@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {
  post: BlogPost;
  querySub:any = "";
  id:string;
  constructor(private pService:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this.pService.getPostbyId(params['id']).subscribe(
        data => this.post = data
      );
     })     
  }

  ngOnDestroy(){
    if(this.querySub){
      this.querySub.unsubscribe();
    }
  }

}
