import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorelServicesComponent } from './morel-services.component';

describe('MorelServicesComponent', () => {
  let component: MorelServicesComponent;
  let fixture: ComponentFixture<MorelServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorelServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorelServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
