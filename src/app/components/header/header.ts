import { Component, OnInit } from '@angular/core';
import { Button } from "../button/button";
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service.';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [Button, CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit{

  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService
    .onToogle()
    .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toogleAddTask(); 
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
