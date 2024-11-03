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
  colaboradores: Colaborador[] = []
  colaboradoresApresentados: Colaborador[] = []
  idProximo = 0;

  colaborador: Colaborador
  pesquisa?: string

  constructor() {
    this.colaborador = new Colaborador();
    this.carregarColaboradoresDoLocalStorage();
  }

  cadastrar() {
    if (this.colaborador.nome === undefined || this.colaborador.nome?.length! < 3) {
      alert("Nome deve conter no mínimo 3 caracteres");
      return;
    }
    if (this.ehCpfValido() == false) {
      alert("CPF inválido, favor preencher no formato: '000.000.000-00'");
      return;
    }

    if (this.colaborador.id === undefined) {

      this.colaborador.id = ++this.idProximo;

      this.colaboradores.push(this.colaborador);

      // Redefinir o colaborador para que o usuário possa cadastrar um novo
      this.colaborador = new Colaborador();

      alert("Colaborador cadastrado com sucesso");
    } else {
      let indiceParaEditar = this.colaboradores.findIndex(x => x.id == this.colaborador.id);
      this.colaboradores[indiceParaEditar].nome = this.colaborador.nome;
      this.colaboradores[indiceParaEditar].cpf = this.colaborador.cpf;

      // Redefinir o colaborador para que o usuário possa cadastrar um novo
      this.colaborador = new Colaborador();

      alert("Colaborador alterado com sucesso");
    }

    this.salvarColaboradoresNoLocalStorage();
  }

  apagar(colaborador: Colaborador) {
    let indiceApagar = this.colaboradores.findIndex(x => x.id == colaborador.id);
    this.colaboradores.splice(indiceApagar, 1);

    this.salvarColaboradoresNoLocalStorage();
  }

  editar(colaborador: Colaborador) {
    this.colaborador = new Colaborador();
    this.colaborador.id = colaborador.id;
    this.colaborador.nome = colaborador.nome;
    this.colaborador.cpf = colaborador.cpf;
  }

  salvarColaboradoresNoLocalStorage() {
    // JSON.stringify => converter lista/objeto em uma string contendo o JSON
    let colaboradoresStringJson = JSON.stringify(this.colaboradores);
    localStorage.setItem("colaboradores", colaboradoresStringJson);
    this.filtrar();
  }

  carregarColaboradoresDoLocalStorage() {
    // Tentar pegar do LocalStorage(Banco de Dados do navegador) a lista de colaboradores
    let colaboradoresStringJson = localStorage.getItem("colaboradores");
    if (colaboradoresStringJson == null)
      return;

    // Converter a string com a lista de colaboradores para uma lista de objetos
    let colaboradores = JSON.parse(colaboradoresStringJson);

    // Atualizar a lista de colaboradores para o usuário continuar utilizando os colabs cadastrados
    this.colaboradores = colaboradores;
    this.idProximo = this.obterUltimoIdentificadorGerado();
    this.filtrar();
  }

  obterUltimoIdentificadorGerado(): number {
    let idMaximo = Math.max(...this.colaboradores.map(colaborador => colaborador.id ?? 0));
    // if (idMaximo)
    //   return idMaximo
    // else
    //   return 0;
    return idMaximo !== -Infinity ? idMaximo : 0;
  }

  popularTabela() {
    this.colaboradores = [
      {
        "id": 1,
        "nome": "Ana Clara Silva",
        "cpf": "123.456.789-00"
      },
      {
        "id": 2,
        "nome": "Carlos Eduardo Oliveira",
        "cpf": "234.567.890-01"
      },
      {
        "id": 3,
        "nome": "Maria Fernanda Santos",
        "cpf": "345.678.901-02"
      },
      {
        "id": 4,
        "nome": "João Pedro Pereira",
        "cpf": "456.789.012-03"
      },
      {
        "id": 5,
        "nome": "Fernanda Lima Silva",
        "cpf": "567.890.123-04"
      },
      {
        "id": 6,
        "nome": "Ricardo Almeida Santos",
        "cpf": "678.901.234-05"
      },
      {
        "id": 7,
        "nome": "Patrícia Gomes Lima",
        "cpf": "789.012.345-06"
      },
      {
        "id": 8,
        "nome": "Lucas Martins Pereira",
        "cpf": "890.123.456-07"
      },
      {
        "id": 9,
        "nome": "Juliana Rocha Almeida",
        "cpf": "901.234.567-08"
      },
      {
        "id": 10,
        "nome": "Bruno Silva Costa",
        "cpf": "012.345.678-09"
      },
      {
        "id": 11,
        "nome": "Cláudia Mendes Santos",
        "cpf": "123.456.789-10"
      },
      {
        "id": 12,
        "nome": "Felipe Dias Lima",
        "cpf": "234.567.890-11"
      },
      {
        "id": 13,
        "nome": "Sofia Nunes Pereira",
        "cpf": "345.678.901-12"
      },
      {
        "id": 14,
        "nome": "André Ferreira Silva",
        "cpf": "456.789.012-13"
      },
      {
        "id": 15,
        "nome": "Tatiane Araújo Gomes",
        "cpf": "567.890.123-14"
      }
    ]
    this.salvarColaboradoresNoLocalStorage()
  }

  filtrar() {
    if (this.pesquisa) {
      this.colaboradoresApresentados = this.colaboradores
        .filter(x => x.nome?.toLowerCase()?.includes(this.pesquisa?.toLowerCase()!))
    } else {
      this.colaboradoresApresentados = this.colaboradores
    }
  }

  ehCpfValido(): boolean {
    let cpfPattern: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/
    let cpfValido: boolean = cpfPattern.test(this.colaborador.cpf!);
    return cpfValido
  }
}

// ng generate component nome-componente

// CRUD: Create, Read, Update, Delete


// Criar o componente despesas
// Permitir fazer o CRUD das despesas
// Armazenar os dados no LocalStorage
// Despesa deve conter:
//  - id, nome, valor, data de vencimento