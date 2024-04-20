import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasLicoresListaComponent } from './bebidas-licores-lista.component';

describe('BebidasLicoresListaComponent', () => {
  let component: BebidasLicoresListaComponent;
  let fixture: ComponentFixture<BebidasLicoresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BebidasLicoresListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BebidasLicoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
