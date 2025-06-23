import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history: string[] = [];

  // Son 5 işlemi getirir
  getHistory(): string[] {
    return [...this.history];
  }

  // İşlem ekler, sadece son 5 tutulur
  addToHistory(operation: string): void {
    this.history.push(operation);
    if (this.history.length > 5) {
      this.history.shift(); // İlk elemanı çıkar
    }
  }
}

