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

  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  handleDelete(id: number) {
    this.onDelete.emit(id);
  }
  handleEdit(book: BookModel) {
    this.router.navigate(['/upsert'], { state: book });
  }
}
