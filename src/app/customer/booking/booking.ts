import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bookingservice } from '../../service/bookingservice';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Authservice } from '../../service/authservice';
@Component({
  selector: 'app-booking',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {
    services: any[] = [];
  providers: any[] = [];
  slots: string[] = [];

  selectedServiceId: number | null = null;
  selectedProviderId: number | null = null;
  selectedDate: string = '';
  selectedSlot: string = '';

  customerId!: number;

  constructor(
    private api: Bookingservice,
    private auth: Authservice
  ) {}

  ngOnInit() {
    this.customerId = this.auth.getUserId();
    this.api.getServices().subscribe(res => this.services = res);
  }

  loadProviders() {
    this.providers = [];
    this.slots = [];
    this.selectedProviderId = null;

    if (!this.selectedServiceId || !this.selectedDate) return;

    this.api.getAvailableProviders(
      this.selectedServiceId,
      this.selectedDate
    ).subscribe(res => this.providers = res);
  }

  loadSlots() {
    this.slots = [];
    this.selectedSlot = '';

    if (!this.selectedServiceId || !this.selectedProviderId || !this.selectedDate) {
      return;
    }

    this.api.getSlots(
      this.selectedProviderId,
      this.selectedServiceId,
      this.selectedDate
    ).subscribe(res => this.slots = res);
  }

  book() {
    if (!this.selectedSlot) return;

    this.api.book({
      serviceId: this.selectedServiceId!,
      providerId: this.selectedProviderId!,
      customerId: this.customerId,
      appointmentDate: this.selectedDate,
      startTime: this.selectedSlot
    }).subscribe({
      next: () => alert('✅ Appointment booked successfully'),
      error: err => alert(err.error)
    });
  }



}
