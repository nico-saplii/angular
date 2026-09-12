import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  template: `
    <section class="seccion-bienvenida">
      <h2>Bienvenido a Conecta Estudiante</h2>
      <p>La plataforma principal para descubrir y participar en los eventos exclusivos de nuestra institución.</p>
    </section>
  `
})
export class Inicio {}