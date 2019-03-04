import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgToastComponent } from './msg-toast.component';

describe('MsgToastComponent', () => {
  let component: MsgToastComponent;
  let fixture: ComponentFixture<MsgToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
