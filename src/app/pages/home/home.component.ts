import { Component } from '@angular/core';
import { TaskInputComponent } from '../../components/task-input/task-input.component';
import { TaskLayoutComponent } from '../../components/task-layout/task-layout.component';
import { CommonModule, DatePipe } from '@angular/common';
import { WeekDatePickerComponent } from '../../components/week-date-picker/week-date-picker.component';
import { TasksService } from '../../services/tasks.service';
import { ToastrService } from 'ngx-toastr';
import { title } from 'process';

@Component({
  selector: 'app-home',
  imports: [TaskInputComponent, TaskLayoutComponent, WeekDatePickerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [DatePipe, TasksService]
})
export class HomeComponent {
  tasks: any = []
  today: string | null;
  day: string | null;
  
  constructor(private datePipe: DatePipe, private http: TasksService, private toastService: ToastrService) {
    const currentDate = new Date();
    this.today = this.datePipe.transform(currentDate, 'MMMM dd');
    this.day = this.datePipe.transform(currentDate, 'dd EEE'); 
    this.getTasks();
  }

  getTasks() {
    this.http.getTasks().subscribe({
      next: (res) => { this.tasks = res },
      error: () => this.toastService.error("Something went wrong!")
    })
  }

  taskSubmit(value: any) {
    const data = {
      title: value.note,
      type: value.type,
      priority: 2,
      //createdAt: new Date()
    }

    this.http.createTask(data).subscribe({
      next: () => this.toastService.show('Add')
    })
    this.tasks.push({title: value.note, type: value.type, isDone: false})
  }

  activeTasks() {
    return this.tasks.filter((task: any) => task.isDone != true).length;
  }

  updateTask(event: { index: number, isDone: boolean, taskId: string }) { //Delayed call, não quero ficar chamando isso várias vezes. O importante é o feedback instantâneo do user
    this.http.updateTaskStatus(event.taskId).subscribe({
      next: () => {this.toastService.success('Task updated')}
    })
    this.tasks[event.index].isDone = event.isDone;
  }
}
