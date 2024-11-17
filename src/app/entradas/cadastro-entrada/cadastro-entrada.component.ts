import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { EntradaCadastro } from '../../models/entrada-cadastro';
import { EntradaService } from '../../servicos/entrada.service';
import { CalendarModule } from 'primeng/calendar';
import { EntradaLista } from '../../models/entrada-lista';

@Component({
  selector: 'app-cadastro-entrada',
  standalone: true,
  imports: [
    DialogModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    InputNumberModule,
    FormsModule,
    CalendarModule,
  ],
  templateUrl: './cadastro-entrada.component.html',
  styleUrl: './cadastro-entrada.component.css'
})
export class CadastroEntradaComponent {
  @Input() dialogVisivel: boolean;
  @Input() tituloDialog: string;
  @Output() cadastroFinalizado: EventEmitter<string>;
  
  form: EntradaCadastro;
  idEntradaExistente?: string;

  constructor(private entradaService: EntradaService){
    this.form = new EntradaCadastro();
    this.dialogVisivel = false;
    this.cadastroFinalizado = new EventEmitter();
    this.tituloDialog = "Cadastro de Entrada";
  }

  protected fecharDialogo(){
    this.form = new EntradaCadastro();
    this.cadastroFinalizado.emit("Finalizado");
  }

  protected salvar(){
    if(this.idEntradaExistente === undefined)
      this.cadastrarEntrada();
    else
      this.editarEntrada();
  }

  protected editarEntrada(){
    this.entradaService.atualizar(this.idEntradaExistente!, this.form).subscribe({
      next: () => this.fecharDialogo(),
      error: erro => {
        alert("Não foi possível atualizar")
        console.error(erro);
      }
    })
  }

  protected cadastrarEntrada(){
    this.entradaService.cadastrar(this.form).subscribe({
      next: () => this.fecharDialogo(),
      error: erro => {
        alert("Não foi possível cadastrar")
        console.error(erro);
      }
    })
  }

  public carregarEntradaExistente(idEntrada: string){
    this.idEntradaExistente = idEntrada;
    this.entradaService.obterPorId(this.idEntradaExistente).subscribe({
      next: entradaLista => this.preencherCampos(entradaLista),
      error: erro => {
        alert("Não foi possível carregar a entrada")
        console.error(erro);
      }
    })
  }

  protected preencherCampos(entradaLista: EntradaLista){
    debugger;
    this.form = new EntradaCadastro();
    this.form.cliente = entradaLista.cliente;
    this.form.data = new Date(entradaLista.data!);
    this.form.nome = entradaLista.nome;
    this.form.valor = entradaLista.valor;
    this.form.idCategoria = entradaLista.idCategoria;
    this.form.descricao = entradaLista.descricao;
    this.form.pendente = entradaLista.pendente;
  }
}
