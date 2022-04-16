import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Output () someEvent = new EventEmitter<number>();
  @Input() page:number;
  constructor() { }
  
  newPage(pageNum:number){
    if(pageNum != 0){
      this.page = pageNum;
    this.someEvent.next(this.page);
    }
    
  }

  ngOnInit(): void {
  }

}
