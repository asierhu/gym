import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteMenuGymComponent } from "./componente-menu-gym/componente-menu-gym.component";
import { ComponenteActividadComponent } from "./componente-actividad/componente-actividad.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteMenuGymComponent, ComponenteActividadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gym';
}
