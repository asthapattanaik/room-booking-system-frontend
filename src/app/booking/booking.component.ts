import { Component, EventEmitter, Output } from '@angular/core';
import { RoomBookingService } from '../services/room-booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  numRooms: number = 1;
  bookings: any[] = [];
  @Output() bookingsUpdated = new EventEmitter<any[]>();

  constructor(private bookingService: RoomBookingService) {}

  ngOnInit() {
    this.getBookings();
  }

  bookRooms() {
    if (this.numRooms < 1 || this.numRooms > 5) {
      alert('Oops! You can book upto 5 rooms.');
      return;
    }

    this.bookingService.bookRooms(this.numRooms).subscribe(
      (response) => {
        console.log('Rooms booked:', response);
        alert('Rooms booked successfully!');
        this.getBookings();
      },
      (error) => {
        console.error('Booking failed:', error);
        alert('Error booking rooms.');
      }
    );
  }

  getBookings() {
    this.bookingService.getBookings().subscribe(
      (response) => {
        this.bookings = response;
        this.bookingsUpdated.emit(this.bookings);
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }
}
