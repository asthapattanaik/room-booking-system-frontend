import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomBookingService {
  private apiUrl = 'https://room-booking-system-backend.onrender.com';

  constructor(private http: HttpClient) {}

  // Book rooms API
  bookRooms(numRooms: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookRooms`, { "numRooms": numRooms });
  }

  // Fetch booked rooms API
  getBookings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getBookings`);
  }

  // Reset bookings API
  resetBookings(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/resetBookings`);
  }

  // Generate random occupancy API
  generateRandomOccupancy(): Observable<any> {
    return this.http.get(`${this.apiUrl}/randomOccupancy`);
  }
}
