import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  currentInput: string = '';

  constructor(private historyService: HistoryService) {}
  
  appendNumber(num: string): void {
    if (this.currentInput === '0') {
      this.currentInput = num;
    } else {
      this.currentInput += num;
    }
  }

  appendOperator(op: string): void {
    if (this.currentInput.length === 0) return;

    const lastChar = this.currentInput[this.currentInput.length - 1];
    if ('+-*/'.includes(lastChar)) {
      this.currentInput = this.currentInput.slice(0, -1) + op;
    } else {
      this.currentInput += op;
    }
  }

  appendDot(): void {
    let lastOperatorIndex = -1;
    for (let i = this.currentInput.length - 1; i >= 0; i--) {
      if ('+-*/'.includes(this.currentInput[i])) {
        lastOperatorIndex = i;
        break;
      }
    }
    const lastNumber = this.currentInput.substring(lastOperatorIndex + 1);
    if (lastNumber.includes('.')) return;

    if (this.currentInput === '' || '+-*/'.includes(this.currentInput.slice(-1))) {
      this.currentInput += '0.';
    } else {
      this.currentInput += '.';
    }
  }

  clear(): void {
    this.currentInput = '';
  }

  delete(): void {
    if (this.currentInput.length > 0) {
      this.currentInput = this.currentInput.slice(0, -1);
    }
  }

  calculate(): void {
    try {
      const lastChar = this.currentInput[this.currentInput.length - 1];
      if ('+-*/'.includes(lastChar)) {
        this.currentInput = this.currentInput.slice(0, -1);
      }

      // eslint-disable-next-line no-new-func
      const result = new Function('return ' + this.currentInput)();

      // İşlemi history servise ekle
      this.historyService.addToHistory(this.currentInput + ' = ' + result);

      this.currentInput = result.toString();
    } catch (error) {
      this.currentInput = 'Hata!';
    }
  }
}

