import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.auth.login(form.value)) this.router.navigate(['/admin']);
  }
}
