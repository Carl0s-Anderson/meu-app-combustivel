import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,
    IonRow, IonCol, IonImg, IonItem, IonLabel, IonInput, IonButton,
    IonButtons, IonIcon,
    // 2. Adicione o RouterModule aqui também
    RouterModule
  ],
})
export class HomePage {
  // O resto do seu código continua exatamente igual...
  public resultado: string | null = null;
  precoAlcool: number | null = null;
  precoGasolina: number | null = null;
  nomePosto: string = '';

  constructor(private storageService: StorageService) {
    addIcons({ bookmarksOutline });
  }

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
    }
  }
}