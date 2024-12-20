import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss'
})
export class TaskCardComponent {
  taskInput = "What's your next annotation?"
}
