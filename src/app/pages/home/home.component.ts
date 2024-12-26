import { Component } from '@angular/core';
import { TaskInputComponent } from '../../components/task-input/task-input.component';
import { TaskLayoutComponent } from '../../components/task-layout/task-layout.component';

@Component({
  selector: 'app-home',
  imports: [TaskInputComponent, TaskLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
