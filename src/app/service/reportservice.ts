import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Reportservice {
  private api = 'https://localhost:7286/api/Reports';

  constructor(private http: HttpClient) {}

  byService() {
    return this.http.get<any[]>(`${this.api}/appointments-by-service`);
  }

  statusSummary() {
    return this.http.get<any[]>(`${this.api}/status-summary`);
  }

  byDate() {
    return this.http.get<any[]>(`${this.api}/appointments-by-date`);
  }
}
