import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Tasks } from "./components/tasks/tasks";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Tasks]
})
export class App {
}
