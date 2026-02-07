import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../../service/authservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   email = '';
  password = '';
  selectedRole = '';

  constructor(
    private auth: Authservice,
    private router: Router
  ) {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res: any) => {

      
        if (res.role !== this.selectedRole) {
          alert('Role mismatch');
          return;
        }

      
this.auth.setLoginUser(
  res.userId,
  res.role,
  res.name,
  res.token
);



       
        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        }
        else if (res.role === 'PROVIDER') {
          this.router.navigate(['/provider']);
        }
        else if (res.role === 'CUSTOMER') {
          this.router.navigate(['/customer']);
        }
      },
      error: () => alert('Invalid credentials')
    });
  }
}
