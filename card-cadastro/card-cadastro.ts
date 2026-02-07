import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

/**
 * Componente responsável pelo CARD DE CADASTRO.
 *
 * Responsabilidades:
 * - Renderizar o formulário de cadastro
 * - Validar os campos
 * - Exibir mensagens de erro
 * - Emitir os dados para cadastro
 *
 * ❗ Este componente NÃO deve:
 * - Fazer requisições HTTP diretamente
 * - Conter regras de negócio complexas
 */
@Component({
  selector: 'app-card-cadastro',
  standalone: true,
  templateUrl: './card-cadastro.html',
  styleUrls: ['./card-cadastro.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CardCadastro {

  /**
   * Formulário de cadastro
   */
  cadastroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  /**
   * Cria e configura o formulário
   * Centralizar isso facilita manutenção e testes
   */
  private buildForm(): void {
    this.cadastroForm = this.formBuilder.group({
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
   * Getter de conveniência para os controles
   * Evita repetir cadastroForm.get(...)
   */
  get f() {
    return this.cadastroForm.controls;
  }

  /**
   * Executado ao submeter o formulário
   */
  onSubmit(): void {

    // Bloqueia submit inválido
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }

    // Extrai dados do formulário
    const { username, password } = this.cadastroForm.value;

    /**
     * Aqui é o ponto correto para:
     * - Chamar um service de cadastro
     * - Emitir um evento
     * - Navegar para outra tela
     */
    console.log('Cadastro enviado:', { username, password });
  }
}
