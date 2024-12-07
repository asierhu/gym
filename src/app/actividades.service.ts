import { Injectable } from '@angular/core';
import { Actividad } from './models/actividad';

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  private actividades: Actividad[] = [
    { fecha:'10/08/2014 00:00', lugar:'Aula02', monitor:'Miguel Goyena', tipo:'BodyPump' },
    { fecha:'12/09/2022 00:00', lugar:'Aula01', monitor:'Miguel Goyena', tipo:'Pilates' },
  ];

  constructor() {}

  obtenerActividades(): Actividad[] {
    return this.actividades;
  }
}