import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomVisualizationComponent } from './room-visualization.component';

describe('RoomVisualizationComponent', () => {
  let component: RoomVisualizationComponent;
  let fixture: ComponentFixture<RoomVisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomVisualizationComponent]
    });
    fixture = TestBed.createComponent(RoomVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
