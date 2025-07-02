import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItem } from "../task-item/task-item";


@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks
      });
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => {
          this.tasks = this.tasks.filter((t) => t.id !== task.id)
        })
  }
}
