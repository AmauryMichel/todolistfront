import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private authentificationService: AuthentificationService
  ) {}

  loginForm = new FormGroup({
    username: new FormControl<string>('', {nonNullable: true, validators:[Validators.required]}),
    password: new FormControl<string>('', {nonNullable: true, validators:[Validators.required, Validators.minLength(4)]})
  })
  onSubmit() {
    this.authentificationService.login(this.loginForm.getRawValue()).subscribe(
      result => {
        console.log(result)
        localStorage.setItem('token', result)
      }
    )
  }
}
