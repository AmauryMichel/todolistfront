import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../data/schema/user';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(
    private userService: UserService
  ) {}

  registerForm = new FormGroup({
    username: new FormControl<string>('', {nonNullable: true, validators:[Validators.required]}),
    password: new FormControl<string>('', {nonNullable: true, validators:[Validators.required, Validators.minLength(6)]})
  })
  onSubmit() {
    this.userService.createUser(this.registerForm.getRawValue()).subscribe(result => console.log("result"))
  }
}
