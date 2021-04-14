import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { BookType } from '../models/book-type';
import { BookCategorie } from '../models/book-categorie';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book: Book;
  booktype: BookType;
  bookcat: BookCategorie

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.bookService.updateBook(this.book)
      .subscribe(() => this.goBackToMain());
  }

  goBackToMain(): void{
    this.router.navigateByUrl("books");
  }

  selectTypeChangeHandler (event: any) : void{
    this.booktype = event.target.value;
  }

  selectCategorieChangeHandler(event: any) : void {
    this.bookcat= event.target.value;
  }
}
