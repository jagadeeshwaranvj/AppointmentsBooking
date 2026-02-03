import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Adminproviderservice } from '../../service/adminproviderservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-adminprovider',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './adminprovider.html',
  styleUrl: './adminprovider.css',
})
export class Adminprovider {
providers: any[] = [];
  editId: number | null = null;
  editData: any = {};

  constructor(private api: Adminproviderservice) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getProviders().subscribe(res => this.providers = res);
  }

  edit(p: any) {
    this.editId = p.userId;
    this.editData = { ...p };
  }

  save(id: number) {
    this.api.update(id, this.editData).subscribe(() => {
      this.editId = null;
      this.load();
    });
  }

  delete(id: number) {
    if (!confirm('Delete provider?')) return;
    this.api.delete(id).subscribe(() => this.load());
  }
}
