import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasVinoDetalleComponent } from './bebidas-vino-detalle.component';

describe('BebidasVinoDetalleComponent', () => {
  let component: BebidasVinoDetalleComponent;
  let fixture: ComponentFixture<BebidasVinoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BebidasVinoDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BebidasVinoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
