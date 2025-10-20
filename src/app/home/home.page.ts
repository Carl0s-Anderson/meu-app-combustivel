import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Importamos o RouterModule para a navegação funcionar
import { RouterModule } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
  IonCol, IonImg, IonItem, IonLabel, IonInput, IonButton,
  IonButtons, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmarksOutline } from 'ionicons/icons';
// Lembre-se que seu arquivo se chama 'storage', então o import está correto aqui
import { StorageService, HistoricoItem } from '../services/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    RouterModule, // Adicionamos o RouterModule para a navegação
    IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
    IonCol, IonImg, IonItem, IonLabel, IonInput, IonButton,
    IonButtons, IonIcon
  ],
})
export class HomePage {

  public resultado: string | null = null;
  precoAlcool: number | null = null;
  precoGasolina: number | null = null;
  nomePosto: string = '';

  constructor(private storageService: StorageService) {
    // Adiciona o ícone para ser usado no HTML
    addIcons({ bookmarksOutline });
  }

  async calcular() {
    // Validamos se AMBOS os campos foram preenchidos
    if (this.precoAlcool != null && this.precoGasolina != null) {

      const razao = this.precoAlcool / this.precoGasolina;
      let melhorOpcao = '';

      if (razao <= 0.7) {
        melhorOpcao = 'Melhor abastecer com Álcool';
      } else {
        melhorOpcao = 'Melhor abastecer com Gasolina';
      }
      this.resultado = melhorOpcao;

      // Prepara o objeto para salvar no histórico
      const novoHistorico: HistoricoItem = {
        posto: this.nomePosto || 'Não informado',
        alcool: this.precoAlcool,
        gasolina: this.precoGasolina,
        resultado: melhorOpcao,
        data: new Date().toLocaleString('pt-BR')
      };

      // Salva os dados usando o nosso serviço
      await this.storageService.saveHistory(novoHistorico);

    } else {
      this.resultado = 'Por favor, preencha ambos os preços!';
    }
  }
}