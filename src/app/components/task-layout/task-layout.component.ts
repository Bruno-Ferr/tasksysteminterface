import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-layout',
  imports: [],
  templateUrl: './task-layout.component.html',
  styleUrl: './task-layout.component.scss'
})
export class TaskLayoutComponent {
  //Deve receber o tipo da tarefa e a mensagem da tarefa
  message = "Important"
  type = "ph-[asterisk--bold]"
}
