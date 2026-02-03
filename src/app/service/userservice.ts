import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  api = 'https://localhost:7286/api/Users';

  constructor(private http: HttpClient) {}

  getByRole(role: string) {
    return this.http.get<any[]>(`${this.api}/role/${role}`);
  }
  
  

  update(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
