import { Component, signal } from '@angular/core';
//import { CardLogin } from './components/card-login/card-login';
//import { CardCadastro } from './components/card-cadastro/card-cadastro';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Estoque');
}
