import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter';
  currentValue: number = 0;
  onIncrease(){
    this.currentValue = Number(this.currentValue) + 1;
  }
  onDecrease(){
    this.currentValue = Number(this.currentValue) - 1;
  }
}
