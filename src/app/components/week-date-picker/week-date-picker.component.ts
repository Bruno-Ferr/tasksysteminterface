import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-date-picker',
  imports: [CommonModule],
  templateUrl: './week-date-picker.component.html',
  styleUrl: './week-date-picker.component.scss'
})
export class WeekDatePickerComponent {
  today = new Date()
  weekDates: Array<{
    day: string;
    dayName: string;
    isSelected: boolean;
    isToday: boolean;
    date: Date;
  }> = [];
  //Talvez eu deva alterar a lógica aqui e separar o dia selecionado. Faz mais sentido.

  previousWeek() {
    this.today.setDate(this.today.getDate() - 7);
    this.weekDates = []
    this.setWeek();
  }

  nextWeek() {
    this.today.setDate(this.today.getDate() + 7);
    this.weekDates = []
    this.setWeek();
  }

  constructor() {
    this.setWeek()
  }

  setWeek() {
    // const monday = this.getMonday(new Date());
    const monday = this.getMonday(this.today);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      this.weekDates.push({
        day: date.getDate().toString().padStart(2, '0'),
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        isSelected: this.isSameDay(date, new Date()),
        isToday: this.isSameDay(date, new Date()),
        date: date
      });
    }
  }

  changeSelectedDay(i: number) {
    this.weekDates.forEach((date, index) => {
      date.isSelected = index === i;
    });
  }

  private getMonday(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
    const monday = new Date(date.setDate(diff));
    return monday;
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }
}
