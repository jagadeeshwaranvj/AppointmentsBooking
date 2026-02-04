import { Component, OnInit } from '@angular/core';
import { Availabilityservice } from '../../service/availabilityservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Authservice } from '../../service/authservice';

@Component({
  selector: 'app-provideravailability',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './provideravailability.html',
  styleUrl: './provideravailability.css',
})
export class Provideravailability implements OnInit {
  providerId!: number;               
  availabilities: any[] = [];

  availability = {
    dayOfWeek: '',
    startTime: '',
    endTime: ''
  };

  constructor(
    private service: Availabilityservice,
    private auth: Authservice      
  ) {}

  ngOnInit() {
  
    this.providerId = this.auth.getUserId();
    this.load();
  }

  dayName(day: number): string {
    return ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][day] || '';
  }

  load() {
    this.service.getByProvider(this.providerId)
      .subscribe(res => this.availabilities = res);
  }

  save() {
    this.service.add({
      providerId: this.providerId,
      dayOfWeek: this.availability.dayOfWeek,
      startTime: this.availability.startTime,
      endTime: this.availability.endTime
    }).subscribe(() => {
      this.load();
      this.availability = { dayOfWeek: '', startTime: '', endTime: '' };
    });
  }

  remove(id: number) {
    this.service.delete(id).subscribe(() => this.load());
  }
}
