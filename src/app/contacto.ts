import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  template: `
    <section class="seccion-contacto">
      <h2>Información de Contacto</h2>
      <p>Correo de atención: consultas@conectaestudiante.edu</p>
      <p>Teléfono de soporte: +56 9 1234 5678</p>
      <p>Ubicación física: Campus Central, Edificio de Ingeniería Tecnológica.</p>
    </section>
  `
})
export class Contacto {}