import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Authservice } from '../../service/authservice';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule,Sidebar,FormsModule,RouterOutlet],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
 constructor(private auth: Authservice, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  
}
