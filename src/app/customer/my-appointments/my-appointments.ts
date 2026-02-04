import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { Bookingservice } from '../../service/bookingservice';
import { Authservice } from '../../service/authservice';

@Component({
  selector: 'app-my-appointments',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './my-appointments.html',
  styleUrl: './my-appointments.css',
})
export class MyAppointments {
   appointments: any[] = [];
  customerId!: number;   

  constructor(
    private api: Bookingservice,
    private auth: Authservice
  ) {}

  ngOnInit() {
  
    this.customerId = this.auth.getUserId();
    this.load();
  }

  load() {
    this.api.getCustomerAppointments(this.customerId)
      .subscribe(res => this.appointments = res);
  }

  cancel(id: number) {
    if (!confirm('Cancel this appointment?')) return;

    this.api.cancelAppointment(id).subscribe({
      next: () => {
        alert('Appointment cancelled');
        this.load(); 
      },
      error: err => alert(err.error)
    });
  }
}
