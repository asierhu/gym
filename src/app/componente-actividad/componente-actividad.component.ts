import { Component } from '@angular/core';
import { Actividad } from '../models/actividad';
import { ActividadesService } from '../actividades.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-actividad',
  imports: [CommonModule],
  templateUrl: './componente-actividad.component.html',
  styleUrl: './componente-actividad.component.scss'
})
export class ComponenteActividadComponent {
  actividades: Actividad[] = [];

  constructor(private actividadesService: ActividadesService) {}

  ngOnInit(): void {
    this.actividades = this.actividadesService.obtenerActividades();
  }
}
