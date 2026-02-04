import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../../service/authservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Bookingservice } from '../../service/bookingservice';
@Component({
  selector: 'app-customerdashboard',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './customerdashboard.html',
  styleUrl: './customerdashboard.css',
})
export class Customerdashboard implements OnInit {
 customerName = '';
  customerId!: number;

  appointments: any[] = [];

  totalAppointments = 0;
  scheduledCount = 0;
  completedCount = 0;
  cancelledCount = 0;

  constructor(
    private auth: Authservice,
    private bookingApi: Bookingservice
  ) {}

  ngOnInit(): void {
    this.customerName = this.auth.getUserName();
    this.customerId = this.auth.getUserId();
    this.loadAppointments();
  }

  loadAppointments() {
    this.bookingApi.getCustomerAppointments(this.customerId)
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
