import { Component, ViewChild } from '@angular/core';
import { EntradaService } from '../../servicos/entrada.service';
import { EntradaLista } from '../../models/entrada-lista';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { CadastroEntradaComponent } from "../cadastro-entrada/cadastro-entrada.component";

@Component({
  selector: 'app-lista-entrada',
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    CadastroEntradaComponent
],
  providers: [MessageService, ConfirmationService],
  templateUrl: './lista-entrada.component.html',
  styleUrl: './lista-entrada.component.css'
})
export class ListaEntradaComponent {
  @ViewChild(CadastroEntradaComponent) cadastroComponent!: CadastroEntradaComponent;

  entradas: EntradaLista[];
  visivel: boolean;
  tituloDialog: string;

  constructor(
    private entradaService: EntradaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
    this.entradas = [];
    this.visivel = false;
    this.tituloDialog = "";
  }

  ngOnInit() {
    this.carregarEntradas();
  }
  
  protected fecharDialog(mensagem: string){
    this.visivel = false;
    this.carregarEntradas();
  }

  protected abrirModalCadastrar(){
    this.tituloDialog = "Cadastro de entrada";
    this.abrirModal();
  }

  protected abrirModalEditar(entradaId: string){
    this.tituloDialog = "Editar entrada";
    this.cadastroComponent.carregarEntradaExistente(entradaId);
    this.abrirModal();
  }

  private carregarEntradas() {
    this.entradaService.obterTodas().subscribe({
      next: entradas => this.entradas = entradas,
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar as entradas");
      }
    })
  }

  protected obterStatus(pendente: boolean): 'warning' | 'success' {
    if (pendente)
      return "warning"
    return "success"
  }

  protected obterTexto(pendente: boolean): string {
    if (pendente)
      return "Pendente"
    return "Recebido"
  }

  protected confirmarExclusao(event: Event, entrada: EntradaLista) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseja realmente apagar "${entrada.nome}"?`,
      header: 'Confirmação de exclusão',
      icon: 'pi pi-trash',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "Sim",
      rejectLabel: "Não",

      accept: () => {
        this.apagar(entrada);
      }
    });
  }

  protected apagar(entrada: EntradaLista) {
    this.entradaService.apagar(entrada.id).subscribe({
      next: () => {
        this.messageService.add({ "severity": "success", "detail": "Entrada apagada com sucesso" })
        this.carregarEntradas();
      },
      error: erro => {
        console.error(erro);
        this.messageService.add({ "severity": "error", "detail": "Não foi possível apagar a entrada" })
      }
    });
  }

  protected abrirModal(){
    this.visivel = true;
  }
}
