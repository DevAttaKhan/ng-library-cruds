import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss'],
})
export class UpsertComponent implements OnInit, DoCheck {
  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngDoCheck(): void {}

  ngOnInit(): void {
    console.log(history.state);
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.bookService.addBook({ id: Date.now(), ...form.value });
    this.router.navigate(['/']);
  }
}
