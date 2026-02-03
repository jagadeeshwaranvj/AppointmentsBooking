import { Component } from '@angular/core';
import { Reportservice } from '../../service/reportservice';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../shared/sidebar/sidebar';
@Component({
  selector: 'app-adminreport',
  imports: [CommonModule,Sidebar],
  templateUrl: './adminreport.html',
  styleUrl: './adminreport.css',
})
export class Adminreport {
byService: any[] = [];
  byStatus: any[] = [];
  byDate: any[] = [];

  constructor(private api: Reportservice) {}

  ngOnInit() {
    this.api.byService().subscribe(res => this.byService = res);
    this.api.statusSummary().subscribe(res => this.byStatus = res);
    this.api.byDate().subscribe(res => this.byDate = res);
  }
}
