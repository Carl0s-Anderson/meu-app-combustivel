import { Component } from '@angular/core';
// Importa o CommonModule para usar o @if
import { CommonModule } from '@angular/common';
// Importa o FormsModule para usar o [(ngModel)]
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
  IonCol, IonItem, IonLabel, IonInput, IonButton, IonSelect,
  IonSelectOption, IonButtons, IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.page.html',
  styleUrls: ['./cadastro-veiculo.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // Necessário para @if
    FormsModule,  // Necessário para [(ngModel)]
    IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,
    IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton,
    IonSelect, IonSelectOption, IonButtons, IonBackButton
  ]
})
export class CadastroVeiculoPage {

  // Variáveis para os dados do veículo
  marca: string = '';
  modelo: string = '';
  tipoMotor: string | null = null; // '1.0', '1.4', etc.

  // Variáveis para o cálculo
  litrosAbastecidos: number | null = null;
  autonomiaCalculada: string | null = null;

  constructor() { }

  /**
   * Define a autonomia média (km/l) com base no tipo de motor.
   * Estes são valores de exemplo, ajuste conforme necessário.
   */
  private getAutonomiaPorMotor(motor: string): number {
    switch (motor) {
      case '1.0':
        return 12.5; // Média de 12.5 km/l
      case '1.4':
        return 11.0; // Média de 11 km/l
      case '1.6':
        return 10.0; // Média de 10 km/l
      case '1.8':
        return 9.0;  // Média de 9 km/l
      case '2.0':
        return 8.0;  // Média de 8 km/l
      default:
        return 10.0; // Um valor padrão caso seja 'outro'
    }
  }

  /**
   * Calcula a autonomia restante com base nos litros e no motor.
   */
  calcularAutonomia() {
    if (this.tipoMotor && this.litrosAbastecidos && this.litrosAbastecidos > 0) {
      // 1. Pega a autonomia base (km/l) do motor
      const consumoMedio = this.getAutonomiaPorMotor(this.tipoMotor);

      // 2. Calcula os KM restantes
      const kmRestantes = this.litrosAbastecidos * consumoMedio;

      // 3. Exibe o resultado formatado para o usuário
      this.autonomiaCalculada = `Com ${this.litrosAbastecidos}L e motor ${this.tipoMotor}, você pode rodar aproximadamente ${kmRestantes.toFixed(1)} km.`;

    } else {
      // Avisa o usuário se faltar dados
      this.autonomiaCalculada = 'Por favor, preencha o tipo de motor e os litros abastecidos.';
    }
  }

}
