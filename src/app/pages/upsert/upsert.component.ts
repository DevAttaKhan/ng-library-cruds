import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/BookModel';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss'],
})
export class UpsertComponent implements OnInit, DoCheck {
  updateId: string = '';
  @ViewChild('form', { static: true })
  public form!: NgForm;
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngDoCheck(): void {}

  ngOnInit(): void {
    this.initializeFormValues();
  }

  initializeFormValues() {
    this.route.params.subscribe((data) => {
      this.updateId = data['id'];
      const book = this.bookService.bookList.find((el) => el.id == data['id']);

      setTimeout(() => {
        book && this.form.form.patchValue(book);
      }, 1);
    });
  }

  private create(value: any) {
    this.bookService.addBook(value);
  }

  private update(value: BookModel) {
    this.bookService.updateBook({ ...value, id: this.updateId });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    console.log(form.value);
    this.updateId ? this.update(form.value) : this.create(form.value);
    this.router.navigate(['/']);
  }
}
