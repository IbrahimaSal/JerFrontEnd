import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPrivateDemandsComponent } from './xprivate-demands.component';

describe('XPrivateDemandsComponent', () => {
  let component: XPrivateDemandsComponent;
  let fixture: ComponentFixture<XPrivateDemandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XPrivateDemandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XPrivateDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
