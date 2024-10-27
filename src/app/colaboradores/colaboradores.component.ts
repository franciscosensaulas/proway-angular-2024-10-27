import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


class Colaborador {
  id?: number
  nome?: string
  cpf?: string
}

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent {
  colaboradores: Colaborador[] = [
    {
      id: 1,
      nome: "Jucicrola",
      cpf: "202.202.202-20"
    }
  ]
  idProximo = 1;

  colaborador: Colaborador

  constructor() {
    this.colaborador = new Colaborador();
  }

  cadastrar() {
    // debugger;
    if (this.colaborador.id === undefined) {

      this.colaborador.id = ++this.idProximo;

      this.colaboradores.push(this.colaborador);

      // Redefinir o colaborador para que o usuário possa cadastrar um novo
      this.colaborador = new Colaborador();

      alert("Colaborador cadastrado com sucesso");
    }else{
      let indiceParaEditar = this.colaboradores.findIndex(x => x.id == this.colaborador.id);
      this.colaboradores[indiceParaEditar].nome = this.colaborador.nome;
      this.colaboradores[indiceParaEditar].cpf = this.colaborador.cpf;

      // Redefinir o colaborador para que o usuário possa cadastrar um novo
      this.colaborador = new Colaborador();

      alert("Colaborador alterado com sucesso");
    }
  }

  apagar(colaborador: Colaborador) {
    let indiceApagar = this.colaboradores.findIndex(x => x.id == colaborador.id);
    this.colaboradores.splice(indiceApagar, 1);
  }

  editar(colaborador: Colaborador) {
    this.colaborador = new Colaborador();
    this.colaborador.id = colaborador.id;
    this.colaborador.nome = colaborador.nome;
    this.colaborador.cpf = colaborador.cpf;
  }
}
