import { BookCategorie } from "./book-categorie";
import { BookType } from "./book-type";

export interface Book {
  id: number;
  name: string;
  author: string;
  year: number;
  type: BookType;
  categorie: BookCategorie;
}

