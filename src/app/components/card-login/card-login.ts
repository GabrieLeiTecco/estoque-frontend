import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login';


@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.html',
  styleUrls: ['./card-login.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})

export class CardLogin {
  loginForm: FormGroup;
  invalid: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.errorMessage = 'Usuário ou senha inválidos'

    /*this.loginService.login(username, password).subscribe({
      next: (response) => {
        console.log('Login OK:', response);
        alert('Login realizado com sucesso!');
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Usuário ou senha inválidos';
      },
    })*/
  }
}
