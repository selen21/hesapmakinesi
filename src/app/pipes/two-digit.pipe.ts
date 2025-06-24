import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigit'
})
export class TwoDigitPipe implements PipeTransform {

  transform(value: number | string): string {
    const num = Number(value);

    // Eğer sayı değilse, değeri olduğu gibi döndür (örneğin '.', '0.' gibi)
    if (isNaN(num)) {
      return value ? value.toString() : '00';
    }

    // Sayı küçükse başına 0 ekle, değilse olduğu gibi stringe çevir
    return num < 10 ? '0' + num : num.toString();
  }

}

