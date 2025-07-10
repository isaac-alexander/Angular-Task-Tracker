import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-button',
  imports: [ CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter()

  constructor() {}


  onClick() {
    this.btnClick.emit();    
  }
}
