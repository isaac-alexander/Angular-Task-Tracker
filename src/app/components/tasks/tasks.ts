import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItem } from "../task-item/task-item";
import { AddTask } from "../add-task/add-task";


@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [CommonModule, TaskItem, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
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

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()    
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));    
  }
}
