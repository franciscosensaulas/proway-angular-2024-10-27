import { Routes } from '@angular/router';
import { ColaboradorFolhaPagamentoComponent } from './colaborador-folha-pagamento/colaborador-folha-pagamento.component';
import { Exemplo01Component } from './exemplo01/exemplo01.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';

export const routes: Routes = [
    { path: "colaborador", component: ColaboradorFolhaPagamentoComponent },
    { path: "exemplo01", component: Exemplo01Component },
    { path: "colaboradores", component: ColaboradoresComponent },
];