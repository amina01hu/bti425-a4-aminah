import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { BlogPost } from './blogpost';
import { HttpClient } from '@angular/common/http';
import { Categories } from './categories';
const PerPage = 6;
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getPosts(page:number, tag:string, category:string): Observable<BlogPost[]>{
    var url: string = 'http://localhost:8080/api/posts?page=' + page + '&perPage='+ PerPage;
    if(tag != null){
      url += '&tag =' + tag;
    }
    if(category != null){
      url+="&category=" + category;
    }
    return this.http.get<BlogPost[]>(url);
  }

  getPostbyId(id:string):Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>("http://localhost:8080/api/posts/" + id);
  }

  getCategories():Observable<any>{
    return this.http.get<Categories[]>('http://localhost:8080/api/categories')
  }

  getTags():Observable<string[]>{
    return this.http.get<string[]>('http://localhost:8080/api/tags');
  }

}
