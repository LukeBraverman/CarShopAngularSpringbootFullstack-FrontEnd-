import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDisplayBlockComponent } from './car-display-block.component';

describe('CarDisplayBlockComponent', () => {
  let component: CarDisplayBlockComponent;
  let fixture: ComponentFixture<CarDisplayBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDisplayBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDisplayBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
