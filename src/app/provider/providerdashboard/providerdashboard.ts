import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Router, RouterOutlet } from '@angular/router';
import { Authservice } from '../../service/authservice';

@Component({
  selector: 'app-providerdashboard',
  imports: [CommonModule,Sidebar,FormsModule,RouterOutlet],
  templateUrl: './providerdashboard.html',
  styleUrl: './providerdashboard.css',
})
export class Providerdashboard {
constructor(private auth: Authservice, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
