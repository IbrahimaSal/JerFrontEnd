import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelesMasculinsComponent } from './modeles-masculins.component';

describe('ModelesMasculinsComponent', () => {
  let component: ModelesMasculinsComponent;
  let fixture: ComponentFixture<ModelesMasculinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelesMasculinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelesMasculinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
