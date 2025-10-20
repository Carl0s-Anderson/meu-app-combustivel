import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import {
  IonContent, IonGrid, IonRow, IonCol, IonImg,
  IonItem, IonLabel, IonInput, IonButton
} from '@ionic/angular/standalone';
=======
// 1. Importe o RouterModule aqui
import { RouterModule } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
  IonCol, IonImg, IonItem, IonLabel, IonInput, IonButton,
  IonButtons, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmarksOutline } from 'ionicons/icons';
import { StorageService, HistoricoItem } from '../services/storage';
>>>>>>> 9a4f2997795ce692f056054074eb6feaef0d3cbb

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
<<<<<<< HEAD
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
=======
    FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,
    IonRow, IonCol, IonImg, IonItem, IonLabel, IonInput, IonButton,
    IonButtons, IonIcon,
    // 2. Adicione o RouterModule aqui também
    RouterModule
  ],
})
export class HomePage {
  // ... o resto do seu código continua igual ...
  public resultado: string | null = null;
  precoAlcool: number | null = null;
  precoGasolina: number | null = null;
  nomePosto: string = '';

  constructor(private storageService: StorageService) {
    addIcons({ bookmarksOutline });
  }
  // ... sua função calcular() continua igual ...
  async calcular() {
    if (this.precoAlcool != null && this.precoGasolina != null) {
      const razao = this.precoAlcool / this.precoGasolina;
      let melhorOpcao = '';

      if (razao <= 0.7) {
        melhorOpcao = 'Melhor abastecer com Álcool';
      } else {
        melhorOpcao = 'Melhor abastecer com Gasolina';
      }
      this.resultado = melhorOpcao;

      const novoHistorico: HistoricoItem = {
        posto: this.nomePosto || 'Não informado',
        alcool: this.precoAlcool,
        gasolina: this.precoGasolina,
        resultado: melhorOpcao,
        data: new Date().toLocaleString('pt-BR')
      };

      await this.storageService.saveHistory(novoHistorico);

    } else {
      this.resultado = 'Por favor, preencha ambos os preços!';
>>>>>>> 9a4f2997795ce692f056054074eb6feaef0d3cbb
    }
  }
}