import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { AdminappointmentService } from '../../service/adminappointment-service';

@Component({
  selector: 'app-admin-appointments',
  standalone: true,
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './admin-appointments.html',
  styleUrl: './admin-appointments.css',
})
export class AdminAppointments {
  appointments: any[] = [];

  constructor(private api: AdminappointmentService ) {}

   ngOnInit() {
    this.load();
  }

  load() {
    this.api.getAll().subscribe(res => {
      this.appointments = res;
    });
  }

  updateStatus(id: number, status: string) {
    this.api.updateStatus(id, status).subscribe(() => {
      const appt = this.appointments.find(a => a.appointmentId === id);
      if (appt) appt.status = status;
      alert('Status updated');
    });
  }


}
