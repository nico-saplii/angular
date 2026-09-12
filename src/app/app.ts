import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './cabecera';
import { MenuNavegacion } from './menu-navegacion';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [RouterOutlet, Cabecera, MenuNavegacion],
  template: `
    <div class="wrapper-principal">
      <app-cabecera></app-cabecera>
      <app-menu-navegacion></app-menu-navegacion>
      
      <main class="contenido-central">
        <router-outlet></router-outlet>
      </main>
      
      <footer class="pie-pagina">
        <p>Derechos reservados - Conecta Estudiante Institucional</p>
      </footer>
    </div>
  `
})
export class AppRaiz {}