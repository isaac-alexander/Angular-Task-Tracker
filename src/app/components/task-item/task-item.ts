import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-task-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
    faTimes = faTimes;


  constructor() { }


  onDelete(task: Task) {    
    this.onDeleteTask.emit(task)
  }


  onToggle(task: Task) {    
    this.onToggleReminder.emit(task)
  }
}
