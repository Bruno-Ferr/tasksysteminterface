import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) {}
  readonly baseUrl = "http://localhost:3000"
  readonly token = sessionStorage.getItem('authToken')

  getTasks() {
    return this.http.get(`${this.baseUrl}/tasks`, { headers: { Authorization: `Bearer ${this.token}`}})
  }

  createTask(data: any) {
    return this.http.post(`${this.baseUrl}/tasks`, data, { headers: { Authorization: `Bearer ${this.token}`} })
  }

  updateTaskStatus(taskId: string) {
    return this.http.patch(`${this.baseUrl}/tasks/${taskId}`, {}, { headers: { Authorization: `Bearer ${this.token}`} })
  }
}
