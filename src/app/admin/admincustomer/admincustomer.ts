import { Component } from '@angular/core';
import { Userservice } from '../../service/userservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-admincustomer',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './admincustomer.html',
  styleUrl: './admincustomer.css',
})
export class Admincustomer {
 customers: any[] = [];
  editUser: any = null;

  constructor(private api: Userservice) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getByRole('CUSTOMER')
      .subscribe(res => this.customers = res);
  }

  edit(c: any) {
    alert('Editing customer ✏️');
    this.editUser = { ...c };
  }

  update() {
    this.api.update(this.editUser.userId, this.editUser)
      .subscribe(() => {
        alert('Customer updated successfully ');
        this.editUser = null;
        this.load();
      });
  }

  delete(id: number) {
    if (!confirm('Are you sure you want to delete this customer? ❌')) return;

    this.api.delete(id).subscribe(() => {
      alert('Customer deleted successfully 🗑️');
      this.load();
    });
  }
}
