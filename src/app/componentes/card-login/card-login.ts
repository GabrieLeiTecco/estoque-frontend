import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

/**
 * Componente responsável pelo CARD DE LOGIN.
 * 
 * Responsabilidades:
 * - Renderizar o formulário de login
 * - Validar os campos (username e password)
 * - Disparar a ação de login
 * - Exibir mensagens de erro
 * 
 * ❗ Este componente NÃO deve:
 * - Tratar regras de negócio complexas
 * - Fazer chamadas HTTP diretamente
 */
@Component({
  selector: 'app-card-login',
  standalone: true,
  templateUrl: './card-login.html',
  styleUrls: ['./card-login.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
]
})
export class CardLogin {

  /** 
   * FormGroup que representa o formulário de login
   * Centraliza o estado e as validações dos campos
   */
  loginForm!: FormGroup;

  /**
   * Mensagem de erro exibida no template
   * Usada para erros de autenticação ou validação externa
   */
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  /**
   * Cria e configura o formulário
   * 
   * Centralizar a criação do formulário facilita:
   * - Leitura
   * - Manutenção
   * - Testes
   */
  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ]
    });
  }

  /**
   * Getter de conveniência para acessar os controles no template
   * 
   * Exemplo:
   * f['username'].invalid
   */
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Executado ao submeter o formulário
   */
  onSubmit(): void {

    // Evita submit caso o formulário seja inválido
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // Extrai os valores do formulário
    const { username, password } = this.loginForm.value;

    console.log('Login enviado:', { username, password });
  }
}
