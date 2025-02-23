import { Component, EventEmitter, Output } from '@angular/core';
import { RoomBookingService } from '../services/room-booking.service';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor(private bookingService: RoomBookingService) {}
    bookings: any[] = [];
    @Output() bookingsUpdated = new EventEmitter<any[]>();
    @Output() refreshBookings = new EventEmitter<void>();
  
  resetBookings() {
    this.bookingService.resetBookings().subscribe(
      (response) => {
        this.bookings = [];
        this.bookingsUpdated.emit(this.bookings);
      },
      (error) => {
        console.error('Error resetting bookings:', error);
      }
    );
  }

  generateRandomOccupancy() {
    this.bookingService.generateRandomOccupancy().subscribe(
      (response) => {
        this.bookings = response.bookedRooms;
        console.log("Random response",response);
        this.bookingsUpdated.emit(this.bookings);
      },
      (error) => {
        console.error("Error generating random occupancy :",error);
      }
    )
  }
}
