import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { AuthentificationService } from '../../services/authentification-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  registerForm = new FormGroup({
    username: new FormControl<string>('', {nonNullable: true, validators:[Validators.required]}),
    password: new FormControl<string>('', {nonNullable: true, validators:[Validators.required, Validators.minLength(4)]})
  })
  onSubmit() {
    this.authentificationService.register(this.registerForm.getRawValue()).subscribe(
      result => {
        this.authentificationService.setLoggedIn(result, this.registerForm.getRawValue().username)
      }
    )
  }
}
