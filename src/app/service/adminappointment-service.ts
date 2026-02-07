import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminappointmentService {
  api = 'https://localhost:7286/api/Appointments';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`${this.api}/admin`);
  }

  getAllPromise(): Promise<any[] | undefined> {
    return this.http.get<any[]>(`${this.api}/admin`).toPromise();
  }

  updateStatus(id: number, status: string) {
    return this.http.put(`${this.api}/${id}/status`, { status });
  }
}
