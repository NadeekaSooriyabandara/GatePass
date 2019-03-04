import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDataTblComponent } from './vehicle-data-tbl.component';

describe('VehicleDataTblComponent', () => {
  let component: VehicleDataTblComponent;
  let fixture: ComponentFixture<VehicleDataTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDataTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDataTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
