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
   availabilities: any[] = [];

  availability = {
    dayOfWeek: '',
    startTime: '',
    endTime: ''
  };

  constructor(private service: Availabilityservice) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getMyAvailability()
      .subscribe(res => this.availabilities = res);
  }

  save() {
    this.service.add({
      dayOfWeek: this.availability.dayOfWeek,
      startTime: this.availability.startTime,
      endTime: this.availability.endTime
    }).subscribe(() => {
      alert('Availability added successfully ');
      this.load();
      this.availability = { dayOfWeek: '', startTime: '', endTime: '' };
    });
  }

  remove(id: number) {
    if (!confirm('Delete this availability? ')) return;

    this.service.delete(id).subscribe(() => {
      alert('Availability deleted successfully 🗑️');
      this.load();
    });
  }


  dayName(day: number): string {
    const days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[day] || '';
  }
}
