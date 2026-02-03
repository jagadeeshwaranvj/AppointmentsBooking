import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Adminproviderservice {
  api = 'https://localhost:7286/api/Users';

  constructor(private http: HttpClient) {}

  getProviders() {
    return this.http.get<any[]>(`${this.api}/role/PROVIDER`);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
