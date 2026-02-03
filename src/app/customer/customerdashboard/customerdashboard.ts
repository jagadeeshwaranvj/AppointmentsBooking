import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../../service/authservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
@Component({
  selector: 'app-customerdashboard',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './customerdashboard.html',
  styleUrl: './customerdashboard.css',
})
export class Customerdashboard {
constructor(private auth: Authservice, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
