import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  options = {
    useLetters: false,
    useNumbers: false,
    useSymbols: false,
    length: 0,
  };
  onChangeUse(value: string): void {
    switch (value) {
      case 'letters':
        this.options.useLetters = !this.options.useLetters;
        break;
      case 'numbers':
        this.options.useNumbers = !this.options.useNumbers;
        break;
      case 'symbols':
        this.options.useSymbols = !this.options.useSymbols;
        break;
    }
  }
  onChangeLength(value: string): void {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.options.length = parsedValue;
    }
  }
  onButtonClick(): void {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    let generatedPassword = '';
    if (this.options.useLetters) {
      validChars += letters;
    }
    if (this.options.useNumbers) {
      validChars += numbers;
    }
    if (this.options.useSymbols) {
      validChars += symbols;
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
