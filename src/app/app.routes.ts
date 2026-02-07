import { Routes } from '@angular/router';
import { CardLogin } from './components/card-login/card-login';
import { CardCadastro } from './components/card-cadastro/card-cadastro';


export const routes: Routes = [
    {
        path: 'cadastro-login',
        component: CardLogin
    },
    {
        path: 'cadastro-conta',
        component: CardCadastro
    }
];
