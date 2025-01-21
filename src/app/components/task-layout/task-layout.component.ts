import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-layout',
  imports: [CommonModule],
  templateUrl: './task-layout.component.html',
  styleUrl: './task-layout.component.scss'
})

export class TaskLayoutComponent {
  //Deve receber o tipo da tarefa e a mensagem da tarefa
  @Input() taskId = "0";
  @Input() task = "Important";
  @Input() type = "";
  @Input() isDone: boolean = false;
  @Input() index: number = 0;

  @Output() toggleIsDone = new EventEmitter<any>();
  toggleDone() {
    this.toggleIsDone.emit({index: this.index, isDone: !this.isDone, taskId: this.taskId});
  }
}
