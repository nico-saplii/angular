import { Component } from '@angular/core';

interface EventoAcademico {
  codigo: number;
  titulo: string;
  expositor: string;
  fecha: string;
  descripcion: string;
}

@Component({
  selector: 'app-actividades',
  standalone: true,
  template: `
    <section class="contenedor-eventos">
      <h2 class="titulo-seccion">Cartelera de Eventos</h2>
      <div class="grilla-eventos">
        @for (evento of listadoEventos; track evento.codigo) {
          <article class="tarjeta-evento">
            <h3>{{ evento.titulo }}</h3>
            <p class="detalle-expositor">Dictado por: {{ evento.expositor }}</p>
            <p class="detalle-fecha">Fecha: {{ evento.fecha }}</p>
            <p class="detalle-descripcion">{{ evento.descripcion }}</p>
          </article>
        } @empty {
          <p>En este momento no existen eventos programados en el sistema.</p>
        }
      </div>
    </section>
  `
})
export class Actividades {
  listadoEventos: EventoAcademico[] = [
    {
      codigo: 101,
      titulo: 'Seminario de Ciberseguridad',
      expositor: 'Ing. Nicolas',
      fecha: '15 de Octubre, 10:00 hrs',
      descripcion: 'Análisis de vulnerabilidades .'
    },
    {
      codigo: 102,
      titulo: 'Taller de hardware',
      expositor: 'Prof Luis',
      fecha: '18 de Octubre, 14:00 hrs',
      descripcion: 'Mantenimiento de hardware.'
    },
    {
      codigo: 103,
      titulo: 'Futbolito',
      expositor: 'Club de Deportes',
      fecha: '20 de Octubre, 09:00 hrs',
      descripcion: 'Competencia intersedes. Contaremos con premios para los tres primeros lugares.'
    },
    {
      codigo: 104,
      titulo: 'Curso de Python',
      expositor: 'Profe Calderon',
      fecha: '25 de Octubre, 16:00 hrs',
      descripcion: 'Estudio de estructuras de datos complejas, concurrencia y optimización de algoritmos.'
    }
  ];
}