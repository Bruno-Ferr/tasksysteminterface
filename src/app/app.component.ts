import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCardComponent } from './components/task-input/task-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tasksysteminterface';
}
