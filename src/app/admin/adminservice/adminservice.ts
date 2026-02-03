import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Servicesservice } from '../../service/servicesservice';
@Component({
  selector: 'app-adminservice',
  standalone: true,
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './adminservice.html',
  styleUrl: './adminservice.css',
})
export class Adminservice {
 services: any[] = [];
  editId: number | null = null;

  form = {
    name: '',
    description: '',
    durationInMinutes: 30
  };

  constructor(private api: Servicesservice) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getAll().subscribe(res => this.services = res);
  }

  save() {
    if (this.editId === null) {
      this.api.add(this.form).subscribe(() => this.load());
    } else {
      this.api.update(this.editId, this.form).subscribe(() => {
        this.editId = null;
        this.load();
      });
    }
    this.reset();
  }

  edit(s: any) {
    this.editId = s.serviceId;
    this.form = {
      name: s.name,
      description: s.description,
      durationInMinutes: s.durationInMinutes
    };
  }

  toggle(id: number) {
    this.api.toggle(id).subscribe(() => this.load());
  }

  delete(id: number) {
    if (confirm('Delete this service?')) {
      this.api.delete(id).subscribe(() => this.load());
    }
  }

  reset() {
    this.form = { name: '', description: '', durationInMinutes: 30 };
  }
}
