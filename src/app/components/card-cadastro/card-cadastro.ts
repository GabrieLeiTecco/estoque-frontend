import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login';

@Component({
  selector: 'app-card-cadastro',
  templateUrl: './card-cadastro.html',
  styleUrls: ['./card-cadastro.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CardCadastro {
  cadastroForm: FormGroup;
  invalid: boolean = true;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.cadastroForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get username() {
    return this.cadastroForm.get('username');
  }

  get password(){
    return this.cadastroForm.get('password');
  }

  onSubmit() {
    const { username, password } = this.cadastroForm.value;
    }
}
