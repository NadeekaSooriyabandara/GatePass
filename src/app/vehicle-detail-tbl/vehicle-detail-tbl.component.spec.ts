import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailTBLComponent } from './vehicle-detail-tbl.component';

describe('VehicleDetailTBLComponent', () => {
  let component: VehicleDetailTBLComponent;
  let fixture: ComponentFixture<VehicleDetailTBLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDetailTBLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailTBLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
