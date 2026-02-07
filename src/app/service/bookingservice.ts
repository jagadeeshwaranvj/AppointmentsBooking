import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class  Bookingservice {
    api = 'https://localhost:7286/api';

  constructor(private http: HttpClient) {}

 getServices() {
  return this.http.get<any[]>(`${this.api}/Services/active`);
}


  getAvailableProviders(serviceId: number, date: string) {
  return this.http.get<any[]>(
    `${this.api}/Slots/providers?serviceId=${serviceId}&date=${date}`
  );
}

getSlots(providerId: number, serviceId: number, date: string) {
  return this.http.get<string[]>(
    `${this.api}/Slots?providerId=${providerId}&serviceId=${serviceId}&date=${date}`
  );
}

 book(data: any) {
  return this.http.post(`${this.api}/Appointments`, data);
}


getCustomerAppointments() {
  return this.http.get<any[]>(
    `${this.api}/Appointments/customer`
  );
}

getMyProviderAppointments() {
  return this.http.get<any[]>(
    `${this.api}/Appointments/provider`
  );
}

cancelAppointment(id: number) {
  return this.http.put(
    `${this.api}/Appointments/${id}/cancel`,
    {}
  );
}


}
