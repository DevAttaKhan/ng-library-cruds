import { Injectable } from '@angular/core';
import { BookModel } from '../models/BookModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  private _bookList: BookModel[] = [];

  get bookList() {
    return this._bookList;
  }
  private set bookList(value) {
    this._bookList = value;
  }

  getBooks() {
    this.http
      .get<BookModel[]>('http://localhost:3000/books')
      .subscribe((data) => {
        this.bookList = data;
      });
  }

  addBook(book: BookModel) {
    console.log(book);
    this.http
      .post<BookModel>('http://localhost:3000/books', book)
      .subscribe((data) => {
        this.bookList.push(data);
      });
  }

  updateBook(book: BookModel) {
    console.log(book);
    this.http
      .patch<BookModel>(`http://localhost:3000/books/${book.id}`, book)
      .subscribe((data) => {
        this.bookList = this.bookList.map((el) =>
          el.id === data.id ? data : el
        );
      });
  }

  deleteBook(id: string) {
    this.http
      .delete<BookModel>(`http://localhost:3000/books/${id}`)
      .subscribe((data) => {
        this.bookList = this.bookList.filter((el) => el.id !== data.id);
      });
  }
}
