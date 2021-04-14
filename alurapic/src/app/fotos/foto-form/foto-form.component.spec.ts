import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoFormComponent } from './foto-form.component';

describe('FotoFormComponent', () => {
  let component: FotoFormComponent;
  let fixture: ComponentFixture<FotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
