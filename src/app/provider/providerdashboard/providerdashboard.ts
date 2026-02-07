import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Router, RouterOutlet } from '@angular/router';
import { Authservice } from '../../service/authservice';
import { Bookingservice } from '../../service/bookingservice';

@Component({
  selector: 'app-providerdashboard',
  imports: [CommonModule,Sidebar,FormsModule],
  templateUrl: './providerdashboard.html',
  styleUrl: './providerdashboard.css',
})
export class Providerdashboard implements OnInit {
 providerName = '';
  providerId!: number;

  appointments: any[] = [];

  totalAppointments = 0;
  scheduledCount = 0;
  completedCount = 0;
  cancelledCount = 0;

  constructor(
    private auth: Authservice,
    private router: Router,
    private bookingApi: Bookingservice
  ) {}

ngOnInit(): void {
  this.providerName = this.auth.getUserName();
  this.loadAppointments();
}

loadAppointments() {
  this.bookingApi.getMyProviderAppointments()
    .subscribe(res => {
      this.appointments = res;
      this.calculateSummary();
    });
}

calculateSummary() {
  this.totalAppointments = this.appointments.length;

  this.scheduledCount =
    this.appointments.filter(a => a.status === 'Scheduled').length;

  this.completedCount =
    this.appointments.filter(a => a.status === 'Completed').length;

  this.cancelledCount =
    this.appointments.filter(a => a.status === 'Cancelled').length;
}

}
