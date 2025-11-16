import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  calculatorOutline,
  trendingUpOutline,
  bulbOutline,
  cashOutline,
  speedometerOutline,
} from 'ionicons/icons';

// Importando o serviço de Storage e o tipo de item
import { StorageService, HistoricoItem } from '../services/storage';

@Component({
  selector: 'app-desempenho',
  templateUrl: './desempenho.page.html',
  styleUrls: ['./desempenho.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonItem,
    IonLabel,
  ],
})
export class DesempenhoPage {
  // Variáveis
  mediaAlcool: number = 0;
  mediaGasolina: number = 0;
  totalRegistros: number = 0;
  vantagensAlcool: number = 0;
  vantagensGasolina: number = 0;
  indicadorInteligente: string = '';
  dicaAutomatica: string =
    'Lembre-se: o álcool só é vantajoso se custar 70% ou menos que o preço da gasolina.';

  constructor(private storageService: StorageService) {
    // Adiciona os ícones que usar
    addIcons({
      calculatorOutline,
      trendingUpOutline,
      bulbOutline,
      cashOutline,
      speedometerOutline,
    });
  }

  // Roda toda vez que o usuário entra na tela
  ionViewWillEnter() {
    this.calcularEstatisticas();
  }

  async calcularEstatisticas() {
    const historico = await this.storageService.getHistory();
    this.totalRegistros = historico.length;

    // Se não houver histórico não faz nada
    if (this.totalRegistros === 0) {
      this.mediaAlcool = 0;
      this.mediaGasolina = 0;
      this.vantagensAlcool = 0;
      this.vantagensGasolina = 0;
      this.indicadorInteligente =
        'Nenhum registro encontrado para calcular as estatísticas.';
      return;
    }

    // 1. Calcula as Médias de Preço
    const somaAlcool = historico.reduce((acc, item) => acc + item.alcool, 0);
    const somaGasolina = historico.reduce(
      (acc, item) => acc + item.gasolina,
      0
    );

    this.mediaAlcool = somaAlcool / this.totalRegistros;
    this.mediaGasolina = somaGasolina / this.totalRegistros;

    // 2. Calcula o Indicador Inteligente
    this.vantagensAlcool = historico.filter((item) =>
      item.resultado.includes('Álcool')
    ).length;
    this.vantagensGasolina = this.totalRegistros - this.vantagensAlcool;

    // Pega os 5 últimos registros ou menos se não houver 5
    const ultimos5Registros = historico.slice(0, 5);
    const vantagensAlcoolUltimos5 = ultimos5Registros.filter((item) =>
      item.resultado.includes('Álcool')
    ).length;

    this.indicadorInteligente = `Nos últimos ${ultimos5Registros.length} abastecimentos, o Álcool foi mais vantajoso em ${vantagensAlcoolUltimos5} deles.`;
  }
}