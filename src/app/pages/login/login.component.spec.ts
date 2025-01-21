import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule, HttpClientModule, ReactiveFormsModule, ToastrModule.forRoot() ],
      providers: [LoginService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const emailInput = fixture.nativeElement.querySelector('input[formControlName="email"]');
    const passInput = fixture.nativeElement.querySelector('input[formControlName="password"]');

    emailInput.value = 'Teste@email.com';
    emailInput.dispatchEvent(new Event('input'));
    passInput.value = 'Pass@1234';
    passInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.loginForm.controls['email'].value).toBe('Teste@email.com');
    expect(component.loginForm.controls['password'].value).toBe('Pass@1234');
  });

  it('should not call submit function when button is clicked', () => {
    jest.spyOn(component, 'submit');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();

    expect(component.submit).not.toHaveBeenCalled();
  });

  it('should call submit function when button is clicked', () => {
    jest.spyOn(component, 'submit');
    const emailInput = fixture.nativeElement.querySelector('input[formControlName="email"]');
    const passInput = fixture.nativeElement.querySelector('input[formControlName="password"]');

    emailInput.value = 'Teste@email.com';
    emailInput.dispatchEvent(new Event('input'));
    passInput.value = 'Pass@1234';
    passInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();

    expect(component.submit).toHaveBeenCalled();
  });
});
