import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Availabilityservice {
   private api = 'https://localhost:7286/api/ProviderAvailability';

  constructor(private http: HttpClient) {}

  getByProvider(providerId: number) {
    return this.http.get<any[]>(`${this.api}/provider/${providerId}`);
  }

  add(data: any) {
    return this.http.post(this.api, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
