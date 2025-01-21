import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new task on submit', () => {
    component.taskSubmit({note: 'test', type: 'ph-[asterisk--bold]'})

    expect(component.tasks[1]).toStrictEqual({note: 'test', type: 'ph-[asterisk--bold]', isDone: false})
  });

  it('should update a task to done', () => {
    component.updateTask({index: 0, isDone: true});

    expect(component.tasks[0]).toStrictEqual({note: 'My first note', type: 'ph-[asterisk--bold]', isDone: true});
  });

  it('should update value of active tasks', () => {
    component.updateTask({index: 0, isDone: true});
    component.taskSubmit({note: 'test', type: 'ph-[asterisk--bold]'});
    component.taskSubmit({note: 'test2', type: 'ph-[asterisk--bold]'});

    const counter = fixture.debugElement.query(By.css('[data-testid="active_tasks_value"]')).nativeElement;
    fixture.detectChanges();
    
    expect(counter.textContent).toContain("2 task today");
  })
});
