import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blogpost';
import { PostService } from 'app/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  class = 'post col-xl-6';
  blogPosts: Array<BlogPost>;
  page:number = 1;
  tag:string = null;
  category:string = null;
  querySub:any = "";
  test:Array<BlogPost>;

  constructor(private pService: PostService, private route:ActivatedRoute ) { }

  getPage(num:number){
    
    this.pService.getPosts(num, this.tag, this.category).subscribe(
      data => {
        if(data.length > 0){
          this.blogPosts = data;
          this.page = num;
        }
      }
    );

  }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if(params['tag']){
      this.tag = params['tag'];
      this.category = null;
      }else{
      this.tag = null;
      }
      if(params['category']){
      this.category = params['category'];
      this.tag = null;
      }else{
      this.category = null;
      }
      this.getPage(+params['page'] || 1);
     });
  }

  ngOnDestroy(){
    if(this.querySub){
      this.querySub.unsubscribe();
    }
  }

}
