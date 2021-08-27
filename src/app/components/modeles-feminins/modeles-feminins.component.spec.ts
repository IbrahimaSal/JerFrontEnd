import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelesFemininsComponent } from './modeles-feminins.component';

describe('ModelesFemininsComponent', () => {
  let component: ModelesFemininsComponent;
  let fixture: ComponentFixture<ModelesFemininsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelesFemininsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelesFemininsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
