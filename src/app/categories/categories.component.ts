import { Component, OnInit } from '@angular/core';
import { Categories } from 'app/categories';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<Categories>;
  constructor(private pService: PostService) { }

  ngOnInit(): void {
    this.pService.getCategories().subscribe(
      data => this.categories = data
    );
  }

}
