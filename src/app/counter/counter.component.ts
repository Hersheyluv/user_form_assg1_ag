import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule, CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
title = 'counter';
  currentValue: number = 0;
  onIncrease(){
    this.currentValue = Number(this.currentValue) + 1;
  }
  onDecrease(){
    this.currentValue = Number(this.currentValue) - 1;
  }
}
