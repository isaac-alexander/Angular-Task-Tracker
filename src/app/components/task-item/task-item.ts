import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem  implements OnInit{
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
    faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {}

  onDelete(task: Task) {    
    this.onDeleteTask.emit(task)
  }
}
