import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blogpost';
import { PostService } from 'app/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {
  post:BlogPost;
  querySub:any = "";
  id:string;
  commentName:string = "";
  commentText:string = "";
  constructor(private pService:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this.id = params['id'];
     })
     this.pService.getPostbyId(this.id).subscribe( (data:any) => {
       this.post = data;
     });
  }

  submitComment(){
    this.post.comments.push({
      author:this.commentName,
      comment:this.commentText,
      date:new Date().toLocaleDateString()
  });
  this.pService.updatePostById(this.id, this.post).subscribe(() =>{
    this.commentName = "";
    this.commentText = "";
  })
  }

  ngOnDestroy(){
    if(this.querySub){
      this.querySub.unsubscribe();
    }
  }

}
