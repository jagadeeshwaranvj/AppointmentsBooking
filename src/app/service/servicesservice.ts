import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Servicesservice {
   private api = 'https://localhost:7286/api/Services';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }


  add(data: any) {
    return this.http.post(this.api, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  toggle(id: number) {
    return this.http.put(`${this.api}/${id}/toggle`, {});
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
