import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-calculadora-ir',
    standalone: true,
    imports: [],
    templateUrl: './calculadora-ir.component.html',
    styleUrl: './calculadora-ir.component.css'
})
export class CalculadoraIrComponent {
    @Input() plrBruto?: number;

    calcularIR(plrBruto: number): number {
        let aliquota = 0;
        let deducao = 0;

        if (plrBruto <= 7640.80) {
            aliquota = 0;
            deducao = 0;
        } else if (plrBruto <= 9922.28) {
            aliquota = 0.075; // 7,5%
            deducao = 573.06;
        } else if (plrBruto <= 13167.00) {
            aliquota = 0.15; // 15%
            deducao = 1317.23;
        } else if (plrBruto <= 16380.38) {
            aliquota = 0.225; // 22,5%
            deducao = 2304.76;
        } else {
            aliquota = 0.275; // 27,5%
            deducao = 3123.78;
        }

        const imposto = (plrBruto * aliquota) - deducao;
        return imposto > 0 ? imposto : 0; // O imposto não pode ser negativo
    }
}
