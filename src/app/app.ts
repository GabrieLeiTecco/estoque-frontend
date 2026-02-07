import { Component, signal } from '@angular/core';
import { CardLogin } from './components/card-login/card-login';
import { CardCadastro } from './components/card-cadastro/card-cadastro';

@Component({
  selector: 'app-root',
  imports: [CardLogin, CardCadastro],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Estoque');
}

