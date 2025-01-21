import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss'
})
export class TaskInputComponent {
  taskInput: string = ''
  taskType: string = 'ph-[dot]'

  @Output() taskSubmit = new EventEmitter<any>();

  submitTask() {
    this.taskSubmit.emit({note: this.taskInput, type: this.taskType});  // Emit the updated value
    this.taskInput = '';
  }
}
