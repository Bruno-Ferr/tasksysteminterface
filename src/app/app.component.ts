import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskLayoutComponent } from './components/task-layout/task-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tasksysteminterface';
}
