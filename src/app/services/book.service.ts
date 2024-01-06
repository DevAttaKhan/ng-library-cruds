import { Injectable } from '@angular/core';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  bookList: BookModel[] = [];

  addBook(book: BookModel) {
    this.bookList.push(book);
  }

  deleteBook(id: number) {
    this.bookList = this.bookList.filter((el) => el.id !== id);
  }
}
