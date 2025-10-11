import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList,
  IonItem, IonLabel, IonButtons, IonBackButton,
  // ADICIONE OS NOVOS COMPONENTES AQUI
  IonGrid, IonRow, IonCol, IonImg
} from '@ionic/angular/standalone';
import { StorageService, HistoricoItem } from '../services/storage';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonLabel, IonButtons, IonBackButton,
    // E ADICIONE ELES AQUI TAMBÉM
    IonGrid, IonRow, IonCol, IonImg
  ],
})
export class HistoricoPage {
  public historico: HistoricoItem[] = [];

  constructor(private storageService: StorageService) { }

  ionViewWillEnter() {
    this.carregarHistorico();
  }

  async carregarHistorico() {
    this.historico = await this.storageService.getHistory();
  }
}