import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Book } from '../models/book';
import { BookCategorie } from '../models/book-categorie';
import { BookType } from '../models/book-type';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  books: Book[];
  book: Book;

  constructor(private bookService: BookService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
  }


  goBack(): void{
    this.router.navigateByUrl("books");
    this.location.back();
  }

  save(name: string, author: string, year: number, type:BookType, categorie:BookCategorie): void{
    name = name.trim();
    if (!name) { return; }
    this.bookService.addBook({name, author, year, type, categorie} as Book)
      .subscribe(book => {
        this.books.push(book);
      });
    this.goBack();
  }
}
