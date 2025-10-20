<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
=======
import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList,
  IonItem, IonLabel, IonButtons, IonBackButton,
  // ADICIONE OS NOVOS COMPONENTES AQUI
  IonGrid, IonRow, IonCol, IonImg
} from '@ionic/angular/standalone';
import { StorageService, HistoricoItem } from '../services/storage';
>>>>>>> 9a4f2997795ce692f056054074eb6feaef0d3cbb

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistoricoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
=======
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
>>>>>>> 9a4f2997795ce692f056054074eb6feaef0d3cbb
