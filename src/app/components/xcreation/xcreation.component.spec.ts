import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XcreationComponent } from './xcreation.component';

describe('XcreationComponent', () => {
  let component: XcreationComponent;
  let fixture: ComponentFixture<XcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XcreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
