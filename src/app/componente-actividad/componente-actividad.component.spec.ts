import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteActividadComponent } from './componente-actividad.component';

describe('ComponenteActividadComponent', () => {
  let component: ComponenteActividadComponent;
  let fixture: ComponentFixture<ComponenteActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
