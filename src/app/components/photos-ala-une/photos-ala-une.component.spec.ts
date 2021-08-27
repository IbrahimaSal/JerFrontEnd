import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAlaUneComponent } from './photos-ala-une.component';

describe('PhotosAlaUneComponent', () => {
  let component: PhotosAlaUneComponent;
  let fixture: ComponentFixture<PhotosAlaUneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosAlaUneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosAlaUneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
