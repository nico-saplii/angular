import { Routes } from '@angular/router';
import { Inicio } from './inicio';
import { Actividades } from './actividades';
import { Inscripcion } from './inscripcion';
import { Contacto } from './contacto';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'actividades', component: Actividades },
  { path: 'inscripcion', component: Inscripcion },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '/inicio' }
];