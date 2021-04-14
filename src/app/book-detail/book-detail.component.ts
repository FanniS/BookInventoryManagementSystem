import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  books: Book[];
  book: Book;
  closeResult: string;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getBook();
    this.getBooks();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  delete(book: Book): void {
      this.books = this.books.filter(b => b !== book);
      this.bookService.deleteBook(book.id).subscribe();
      this.modalService.dismissAll();
      this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.location.forward();
  }

  showModal(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
