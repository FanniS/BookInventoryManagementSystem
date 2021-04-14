import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../models/book';
import { BookType } from '../models/book-type'
//import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  types: BookType[] = ['paper', 'ebook'];
  createDb() {
    const books = [
      { id: 1, name: 'Garnethill ', author: 'Denise Mina', year: 1998, type: this.types[0], categorie: 'Crime'},
      { id: 2, name: '1984', author: 'George Orwell', year: 1949, type: 'paper', categorie: 'Sci-fi'},
      { id: 3, name: 'Romeo and Juliet', author: 'William Shakespeare', year: 1597, type: 'paper', categorie: 'Literature' },
      { id: 4, name: 'Grant', author: 'Ron Chernow', year: 2017, type: 'ebook', categorie: 'Historical'},
      { id: 5, name: 'The Fault in Our Stars', author: 'John Green', year: 2012, type: 'ebook', categorie: 'Romantic' },
      { id: 6, name: 'Then She Was Gone',  author: 'Lisa Jewell', year: 2017, type: 'ebook', categorie: 'Drama'},
      { id: 7, name: 'The Hunger Games',  author: 'Suzanne Collins', year: 2008, type: 'paper', categorie: 'Young'},
      { id: 8, name: 'Winnie-the-Pooh',  author: 'Alan Alexander Milne', year: 1926, type: 'paper', categorie: 'Kids'},
      { id: 9, name: 'Our Time Is Now',  author: 'Stacey Abrams', year: 2020, type: 'ebook', categorie: 'Political' }
    ];
    return {books};
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  }
}
