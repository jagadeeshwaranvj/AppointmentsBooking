import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Authservice {
  
private apiUrl = 'https://localhost:7286/api/Users';

  constructor(private http: HttpClient) {}

  // 🔐 LOGIN API
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login`,
      null,
      { params: { email, password } }
    );
  }

  // ✅ SAVE LOGGED-IN USER
  setLoginUser(userId: number, role: string) {
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('role', role);
  }

  // 🔍 GETTERS
  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }

  getRole(): string {
    return localStorage.getItem('role') || '';
  }

  // 🧠 ROLE CHECKS
  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  isProvider(): boolean {
    return this.getRole() === 'PROVIDER';
  }

  isCustomer(): boolean {
    return this.getRole() === 'CUSTOMER';
  }

  // 🚪 LOGOUT
  logout() {
    localStorage.clear();
  }
}
