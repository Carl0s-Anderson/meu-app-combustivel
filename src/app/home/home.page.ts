import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonGrid, IonRow, IonCol, IonImg,
  IonItem, IonLabel, IonInput, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonGrid, IonRow, IonCol, IonImg,
    IonItem, IonLabel, IonInput, FormsModule, IonButton
  ],
})
export class HomePage {

  public resultado: string | null = null;
  precoAlcool: number | null = null;
  precoGasolina: number | null = null;

  constructor() { }

  calcular() {
    // Validamos se AMBOS os campos foram preenchidos
    if (this.precoAlcool != null && this.precoGasolina != null) {

      // CORREÇÃO 1: Usando 'const' para declarar as variáveis corretamente.
      // Não precisamos de parseFloat pois o tipo do input já é 'number'.
      const vaAlcool = this.precoAlcool;
      const vaGasolina = this.precoGasolina;

      const res = vaAlcool / vaGasolina;

      if (res >= 0.7) {
      
        this.resultado = "Melhor usar Gasolina";
      } else {

        this.resultado = "Melhor usar Álcool";
      }
    } else {
      this.resultado = 'Não Preenchido. Por favor, preencha os dois campos.';
    }
  }
}