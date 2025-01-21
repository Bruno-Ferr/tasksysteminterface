import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  readonly baseUrl = "http://localhost:3000"

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, {email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("authToken", value.access_token);
      })
    )
  }

}
