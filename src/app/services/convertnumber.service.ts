import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertnumberService {
  constructor() {}

  getRomanNumber = (number) => {
    var _letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    if (number > 1000)
      throw 'Este sistema de conversión no acepta numeros mayores a 1000';

    var roman = '';
    var narray = String(number).split('').reverse();

    var parser = (item, index) => {
      switch (item) {
        case '0':
        case '1':
        case '2':
        case '3':
          roman = new Array(Number(item) + 1).join(_letters[index * 2]) + roman;
          break;
        case '4':
          roman = _letters[index * 2] + _letters[index * 2 + 1] + roman;
          break;
        case '5':
        case '6':
        case '7':
        case '8':
          roman =
            _letters[index * 2 + 1] +
            new Array(Number(item) - 4).join(_letters[index * 2]) +
            roman;
          break;

        case '9':
          roman = _letters[index * 2] + _letters[index * 2 + 2] + roman;
          break;
      }
    };
    narray.forEach(parser);
    return roman;
  };
}
