import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/BookModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  @Input() book: BookModel | undefined;

  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  handleDelete(id: string) {
    this.onDelete.emit(id);
  }
  handleEdit(book: BookModel) {
    this.router.navigate([`/upsert/${book.id}`]);
  }
}
