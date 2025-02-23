import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Room {
  roomNumber: number;
  isBooked: boolean;
}

interface Floor {
  floorNumber: number;
  rooms: Room[];
}

@Component({
  selector: 'app-room-visualization',
  templateUrl: './room-visualization.component.html',
  styleUrls: ['./room-visualization.component.css']
})
export class RoomVisualizationComponent implements OnChanges {
  floors: Floor[] = [];
  @Input() bookings: any[] = [];

  constructor() {
    this.initializeRooms();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bookings'] && this.bookings) {
      this.updateBookedRooms();
    }
  }

  initializeRooms() {
    this.floors = []; // Clear floors to avoid duplication
    for (let i = 1; i <= 10; i++) {
      let totalRooms = i === 10 ? 7 : 10;
      let floor: Floor = {
        floorNumber: i,
        rooms: []
      };

      for (let j = 1; j <= totalRooms; j++) {
        let roomNumber = i * 100 + j;
        floor.rooms.push({ roomNumber, isBooked: false });
      }

      this.floors.push(floor);
    }
  }

  updateBookedRooms() {
    console.log("Bookings updated:", this.bookings);
    
    this.floors.forEach(floor => {
      floor.rooms.forEach(room => {
        room.isBooked = this.bookings.some(booking => booking.roomNumber === room.roomNumber);
      });
    });
  }
}
