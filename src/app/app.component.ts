import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temperature-converter';

  celsius: number = 0;
  fahrenheit: number = 0;

  convertToCelsius() {
    this.celsius = (this.fahrenheit - 32) * 5 / 9;
  }
  convertToFahrenheit() {

    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }
}
