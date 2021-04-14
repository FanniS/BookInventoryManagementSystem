import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BooksComponent } from './books/books.component';
import { CardviewComponent } from './cardview/cardview.component';

const routes: Routes = [
  { path: '', redirectTo: '/cardview', pathMatch: 'full' },
  { path: 'cardview', component: CardviewComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/new', component: BookNewComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books/:id/edit', component: BookEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
