import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDatePickerComponent } from './week-date-picker.component';
import { By } from '@angular/platform-browser';

describe('WeekDatePickerComponent', () => {
  let component: WeekDatePickerComponent;
  let fixture: ComponentFixture<WeekDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a week', () => {
    expect(component.weekDates.length).toBe(7)
  })

  it('should navigate between previous dates in calendar', () => {
    jest.spyOn(component, 'previousWeek');
    const previousDateBtn = fixture.debugElement.query(By.css('[data-testid="previous-week"]')).nativeElement;

    previousDateBtn.click();
    fixture.detectChanges();

    expect(component.previousWeek).toHaveBeenCalled();

    const expectedDate = new Date();
    expectedDate.setDate(new Date().getDate() - 7);
    expect(component.today.toDateString()).toBe(expectedDate.toDateString());
  })

  it('should navigate between next dates in calendar', () => {
    jest.spyOn(component, 'nextWeek');
    const nextDateBtn = fixture.debugElement.query(By.css('[data-testid="next-week"]')).nativeElement;

    nextDateBtn.click();
    fixture.detectChanges();

    expect(component.nextWeek).toHaveBeenCalled();

    const expectedDate = new Date();
    expectedDate.setDate(new Date().getDate() + 7);
    expect(component.today.toDateString()).toBe(expectedDate.toDateString());
  })
  
  it('should have a background color if selected', () => {
    component.weekDates = [
      { day: '01', dayName: 'Monday', isSelected: false, isToday: false, date: new Date() },
      { day: '02', dayName: 'Tuesday', isSelected: true, isToday: true, date: new Date() },  // Selected date
    ];
    fixture.detectChanges();  // Apply changes
      
  // Find all date elements
  const dateElements = fixture.debugElement.queryAll(By.css('div.flex.flex-col.items-center')); //or [data-testid="selected-day-bg"]
  
  // Get the second date element (index 1) since it should be selected
  const selectedDateElement = dateElements[1].nativeElement;

  // Check for the presence of the bg-light-secondary class
  expect(selectedDateElement.classList).toContain('bg-light-secondary');
  })

  it('should change selected date on click', () => {
    component.weekDates = [
      { day: '01', dayName: 'Monday', isSelected: false, isToday: false, date: new Date() },
      { day: '02', dayName: 'Tuesday', isSelected: true, isToday: true, date: new Date() },  // Selected date
    ];
    fixture.detectChanges();  // Apply changes
      
    // Find all date elements
    const dateElements = fixture.debugElement.queryAll(By.css('div.flex.flex-col.items-center')); //or [data-testid="selected-day-bg"]
    
    // Get the first date element (index 0) since it should be selected
    const selectedDateElement = dateElements[0].nativeElement;
    selectedDateElement.click()
    fixture.detectChanges();  // Apply changes

    // Check for the presence of the bg-light-secondary class
    expect(component.weekDates[0].isSelected).toBe(true);
    expect(selectedDateElement.classList).toContain('bg-light-secondary');
  })
});
