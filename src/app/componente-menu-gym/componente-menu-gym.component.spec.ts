import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMenuGymComponent } from './componente-menu-gym.component';

describe('ComponenteMenuGymComponent', () => {
  let component: ComponenteMenuGymComponent;
  let fixture: ComponentFixture<ComponenteMenuGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteMenuGymComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteMenuGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
