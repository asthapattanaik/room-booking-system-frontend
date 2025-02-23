import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RoomVisualizationComponent } from './room-visualization/room-visualization.component';
import { ControlsComponent } from './controls/controls.component'; 
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, BookingComponent,RoomVisualizationComponent, ControlsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
