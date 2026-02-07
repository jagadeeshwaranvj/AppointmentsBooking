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
    alert('Editing provider ');
    this.editId = p.userId;
    this.editData = { ...p };
  }

  save(id: number) {
    this.api.update(id, this.editData).subscribe(() => {
      alert('Provider updated successfully ');
      this.editId = null;
      this.load();
    });
  }

  delete(id: number) {
    if (!confirm('Are you sure you want to delete this provider? ')) return;

    this.api.delete(id).subscribe(() => {
      alert('Provider deleted successfully ');
      this.load();
    });
  }
}
