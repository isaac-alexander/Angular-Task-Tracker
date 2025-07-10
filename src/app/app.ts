import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import {RouterOutlet} from '@angular/router';
import { Footer } from "./components/footer/footer";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, RouterOutlet, Footer]
})
export class App {
}
