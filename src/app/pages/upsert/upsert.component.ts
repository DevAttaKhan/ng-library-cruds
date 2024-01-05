import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss'],
})
export class UpsertComponent implements OnInit {
  p = { id: 1, value: 'select generesdfs' };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // if (form.invalid) return;
    console.log(form);
  }
}
