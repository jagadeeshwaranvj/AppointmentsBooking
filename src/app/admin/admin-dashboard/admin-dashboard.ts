import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Authservice } from '../../service/authservice';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { Userservice } from '../../service/userservice';
import { Servicesservice } from '../../service/servicesservice';
import { AdminappointmentService } from '../../service/adminappointment-service';
@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule,Sidebar,FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  adminName = '';

  totalCustomers = 0;
  totalProviders = 0;
  totalServices = 0;
  totalAppointments = 0;

  appointments: any[] = [];

  constructor(
    private auth: Authservice,
    private router: Router,
    private userApi: Userservice,
    private serviceApi: Servicesservice,
    private appointmentApi: AdminappointmentService
  ) {}

  ngOnInit(): void {
    this.adminName = this.auth.getUserName();
    this.loadCounts();
    this.loadAppointments();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

 loadCounts() {
  this.userApi.getAll().subscribe((users: any[]) => {
    this.totalCustomers = users.filter((u: any) => u.role === 'CUSTOMER').length;
    this.totalProviders = users.filter((u: any) => u.role === 'PROVIDER').length;
  });

  this.serviceApi.getAll().subscribe((services: any[]) => {
    this.totalServices = services.length;
  });

  this.appointmentApi.getAll().subscribe((apps: any[]) => {
    this.totalAppointments = apps.length;
  });
}


  loadAppointments() {
    this.appointmentApi.getAll().subscribe(res => {
      this.appointments = res;
    });
  }
  
}
