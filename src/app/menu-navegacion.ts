import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-navegacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="barra-navegacion">
      <ul class="lista-enlaces">
        <li><a routerLink="/inicio" routerLinkActive="enlace-activo">Inicio</a></li>
        <li><a routerLink="/actividades" routerLinkActive="enlace-activo">Actividades</a></li>
        <li><a routerLink="/inscripcion" routerLinkActive="enlace-activo">Inscripción</a></li>
        <li><a routerLink="/contacto" routerLinkActive="enlace-activo">Contacto</a></li>
      </ul>
    </nav>
  `
})
export class MenuNavegacion {}