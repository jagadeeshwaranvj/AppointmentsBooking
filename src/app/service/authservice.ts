import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Authservice {
  
 private apiUrl = 'https://localhost:7286/api/Users';

  constructor(private http: HttpClient) {}

  
  login(email: string, password: string) {
    return this.http.post<any>(
      `${this.apiUrl}/login`,
      null,
      { params: { email, password } }
    );
  }

  
  setLoginUser(userId: number, role: string, name: string) {
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('role', role);
    localStorage.setItem('name', name);
  }

  
  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }

  getRole(): string {
    return localStorage.getItem('role') || '';
  }

  getUserName(): string {
    return localStorage.getItem('name') || '';
  }

  
  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  isProvider(): boolean {
    return this.getRole() === 'PROVIDER';
  }

  isCustomer(): boolean {
    return this.getRole() === 'CUSTOMER';
  }

  
  logout() {
    localStorage.clear();
  }
}
