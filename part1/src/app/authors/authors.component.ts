import { ListService } from '../common/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: string[];

  constructor(listService: ListService) {
    this.authors = listService.authors;
  }

  public countAuthor(): number {
    return this.authors.length;
  }

  ngOnInit() {
  }

}
