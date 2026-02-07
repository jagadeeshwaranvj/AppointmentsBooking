import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-providerappointments',
  imports: [CommonModule, Sidebar, FormsModule],
  templateUrl: './providerappointments.html',
  styleUrl: './providerappointments.css',
})
export class Providerappointments implements OnInit {
  appointments: any[] = [];
  apiUrl = 'https://localhost:7286/api/Appointments';

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.http
      .get<any[]>(`${this.apiUrl}/provider`)
      .subscribe({
        next: data => {
          console.log('Provider appointments:', data);
          this.appointments = data;
        },
        error: err => console.error(err)
      });
  }






  updateStatus(id: number, status: string) {
    this.http.put(`${this.apiUrl}/${id}/status`, { status })
      .subscribe(() => {
        const appt = this.appointments.find(a => a.appointmentId === id);
        if (appt) appt.status = status;
      });
  }

}

