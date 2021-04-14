import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoListaComponent } from './foto-lista.component';

describe('FotoListaComponent', () => {
  let component: FotoListaComponent;
  let fixture: ComponentFixture<FotoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
