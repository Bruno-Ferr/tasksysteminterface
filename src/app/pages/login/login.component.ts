import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,  Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)])
  })

  constructor(
    private router: Router,
    private http: LoginService,
    private toastService: ToastrService
  ) {}

  submit() {
    if(!this.loginForm.value.email || !this.loginForm.value.password) return
    this.http.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {this.toastService.success("Successfully logged in!"), this.router.navigate(["/"])},
      error: () => this.toastService.error("Something went wrong!")
    })
  }

  get email() {
    return this.loginForm.controls.email
  }
}
