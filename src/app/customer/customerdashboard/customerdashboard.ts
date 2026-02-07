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

  total = 0;
  scheduled = 0;
  completed = 0;
  cancelled = 0;

  constructor(
    private auth: Authservice,
    private booking: Bookingservice
  ) {}

  ngOnInit() {
  this.customerName = this.auth.getUserName();
  this.loadAppointments();
}

loadAppointments() {
  this.booking.getCustomerAppointments()
    .subscribe(res => {
      this.appointments = res;
      this.calculate();
    });
}


 calculate() {
  this.total = this.appointments.length;
  this.scheduled = this.appointments.filter(a => a.status === 'Scheduled').length;
  this.completed = this.appointments.filter(a => a.status === 'Completed').length;
  this.cancelled = this.appointments.filter(a => a.status === 'Cancelled').length;
}


  cancel(id: number, date: string) {
    if (new Date(date) < new Date()) {
      alert('Past appointment cannot be cancelled');
      return;
    }

    this.booking.cancelAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }
}
