import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toogleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)
  }

  onToogle(): Observable<any> {
    return this.subject.asObservable();
  }
 }
