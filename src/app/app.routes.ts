import { Routes } from '@angular/router';
import { ColaboradorFolhaPagamentoComponent } from './colaborador-folha-pagamento/colaborador-folha-pagamento.component';
import { Exemplo01Component } from './exemplo01/exemplo01.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { CalculadoraPlrComponent } from './calculadora-plr/calculadora-plr.component';
import { CadastroDespesaComponent } from './despesas/cadastro-despesa/cadastro-despesa.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { EditarDespesaComponent } from './despesas/editar-despesa/editar-despesa.component';
import { CadastroCategoriaComponent } from './categorias/cadastro-categoria/cadastro-categoria.component';
import { ListaDespesasComponent } from './despesas/lista-despesas/lista-despesas.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { ListaEntradaComponent } from './entradas/lista-entrada/lista-entrada.component';

export const routes: Routes = [
    { path: "colaborador", component: ColaboradorFolhaPagamentoComponent },
    { path: "exemplo01", component: Exemplo01Component },
    { path: "colaboradores", component: ColaboradoresComponent },
    { path: "calculadora-plr", component: CalculadoraPlrComponent },
    { path: "lista-despesas", component: ListaDespesasComponent },
    { path: "despesas/cadastro", component: CadastroDespesaComponent },
    { path: "despesas/editar/:id", component: EditarDespesaComponent },
    { path: "categorias/editar/:id", component: EditarCategoriaComponent },
    { path: "lista-categorias", component: ListaCategoriasComponent },
    { path: "categorias/cadastro", component: CadastroCategoriaComponent },

    { path: "lista-entradas", component: ListaEntradaComponent },
];