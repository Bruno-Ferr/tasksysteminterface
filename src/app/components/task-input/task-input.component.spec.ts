import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputComponent } from './task-input.component';
import { By } from '@angular/platform-browser';

describe('TaskCardComponent', () => {
  let component: TaskInputComponent;
  let fixture: ComponentFixture<TaskInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit taskSubmit', () => {
    jest.spyOn(component.taskSubmit, 'emit');
    component.taskInput = 'Tarefa teste';
    component.submitTask();

    expect(component.taskSubmit.emit).toHaveBeenCalledWith({
      note: 'Tarefa teste',
      type: 'ph-[dot]'
    })
  });

  it('should update taskInput and taskType on user input', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const select = fixture.debugElement.query(By.css('select')).nativeElement;

    input.value = 'New Task';
    input.dispatchEvent(new Event('input'));
    select.value = 'ph-[circle]';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.taskInput).toBe('New Task');
    expect(component.taskType).toBe('ph-[circle]');
  });

  it('should call submitTask when button is clicked', () => {
    jest.spyOn(component, 'submitTask');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();

    expect(component.submitTask).toHaveBeenCalled();
  });
});
