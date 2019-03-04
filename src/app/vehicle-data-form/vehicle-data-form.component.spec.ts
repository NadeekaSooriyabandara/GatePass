import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDataFormComponent } from './vehicle-data-form.component';

describe('VehicleDataFormComponent', () => {
  let component: VehicleDataFormComponent;
  let fixture: ComponentFixture<VehicleDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
