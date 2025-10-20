import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList,
  IonItem, IonLabel, IonButtons, IonBackButton,
  IonGrid, IonRow, IonCol, IonImg
} from '@ionic/angular/standalone';
// Lembre-se que seu arquivo se chama 'storage', então este import está correto
import { StorageService, HistoricoItem } from '../services/storage';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonLabel, IonButtons, IonBackButton,
    IonGrid, IonRow, IonCol, IonImg
  ],
})
export class HistoricoPage {
  public historico: HistoricoItem[] = [];

  constructor(private storageService: StorageService) { }

  // Este método é chamado toda vez que a página de histórico é aberta
  ionViewWillEnter() {
    this.carregarHistorico();
  }

  async carregarHistorico() {
    this.historico = await this.storageService.getHistory();
  }
}