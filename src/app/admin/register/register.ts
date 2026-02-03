import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
 apiUrl = 'https://localhost:7286/api/Users';

  user = {
    name: '',
    email: '',
    phone: '',
    passwordHash: '',
    role: ''
  };

  constructor(private http: HttpClient) {}

  register() {
    if (!this.user.role) {
      alert('Select role');
      return;
    }

    this.http.post(this.apiUrl, this.user).subscribe({
      next: () => {
        alert('User registered successfully');
        this.reset();
      },
      error: () => alert('Registration failed')
    });
  }

  reset() {
    this.user = {
      name: '',
      email: '',
      phone: '',
      passwordHash: '',
      role: ''
    };
  }
}
