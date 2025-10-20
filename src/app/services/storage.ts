import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

// Defini uma interface para organizar o que salvamos
export interface HistoricoItem {
  posto: string;
  alcool: number;
  gasolina: number;
  resultado: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private HISTORY_KEY = 'abastecimento_historico';

  constructor() { }

 
  async getHistory(): Promise<HistoricoItem[]> {
    const { value } = await Preferences.get({ key: this.HISTORY_KEY });
    // Se houver algo converte de texto para objeto. Se não, retorna um array vazio.
    return value ? JSON.parse(value) : [];
  }

  // Salva um novo item no histórico
  async saveHistory(item: HistoricoItem) {
    //  pegao histórico que já existe
    const historico = await this.getHistory();
    // Adiciona o novo item no início da lista
    historico.unshift(item);
    // Salva a lista inteira de volta, convertendo para texto JSON
    await Preferences.set({
      key: this.HISTORY_KEY,
      value: JSON.stringify(historico),
    });
  }
}