import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Tasks } from "./components/tasks/tasks";
import {RouterModule} from '@angular/router';
import { Footer } from "./components/footer/footer";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, RouterModule, Footer]
})
export class App {
}
