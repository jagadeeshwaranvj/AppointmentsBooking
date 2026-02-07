import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Authservice {
  
 api = 'https://localhost:7286/api/Users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(
      `${this.api}/login?email=${email}&password=${password}`,
      {}
    );
  }

  setLoginUser(userId: number, role: string, name: string, token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('role', role);
    localStorage.setItem('name', name);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }

  getUserName(): string {
    return localStorage.getItem('name') || '';
  }

  isAdmin() {
    return localStorage.getItem('role') === 'ADMIN';
  }

  isProvider() {
    return localStorage.getItem('role') === 'PROVIDER';
  }

  isCustomer() {
    return localStorage.getItem('role') === 'CUSTOMER';
  }

  logout() {
    localStorage.clear();
  }
}
