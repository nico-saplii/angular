import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="caja-formulario">
      <h2 class="titulo-formulario">Formulario de Registro Académico</h2>
      
      <form [formGroup]="registroForm" (ngSubmit)="procesarFormulario()" class="estructura-form">
        
        <div class="grupo-entrada">
          <label for="nombres">Nombres:</label>
          <input id="nombres" type="text" formControlName="campoNombre" class="input-texto">
          @if (registroForm.get('campoNombre')?.invalid && registroForm.get('campoNombre')?.touched) {
            <span class="mensaje-error">El nombre es obligatorio y requiere un mínimo de 3 caracteres.</span>
          }
        </div>

        <div class="grupo-entrada">
          <label for="apellidos">Apellidos:</label>
          <input id="apellidos" type="text" formControlName="campoApellido" class="input-texto">
          @if (registroForm.get('campoApellido')?.invalid && registroForm.get('campoApellido')?.touched) {
            <span class="mensaje-error">El apellido es obligatorio y requiere un mínimo de 3 caracteres.</span>
          }
        </div>

        <div class="grupo-entrada">
          <label for="email">Correo Electrónico:</label>
          <input id="email" type="email" formControlName="campoCorreo" class="input-texto">
          @if (registroForm.get('campoCorreo')?.invalid && registroForm.get('campoCorreo')?.touched) {
            <span class="mensaje-error">Debe proporcionar un correo electrónico válido.</span>
          }
        </div>

        <div class="grupo-entrada">
          <label for="carrera">Carrera Actual:</label>
          <input id="carrera" type="text" formControlName="campoCarrera" class="input-texto">
          @if (registroForm.get('campoCarrera')?.invalid && registroForm.get('campoCarrera')?.touched) {
            <span class="mensaje-error">Indicar su carrera es un campo obligatorio.</span>
          }
        </div>

        <div class="grupo-entrada">
          <label for="eventoSelect">Actividad de Interés:</label>
          <select id="eventoSelect" formControlName="campoActividad" class="input-seleccion">
            <option value="" disabled selected>Seleccione la actividad</option>
            <option value="ciberseguridad">Seminario de Ciberseguridad</option>
            <option value="emprendimiento">Taller de Hardware</option>
            <option value="ajedrez">Futbolito</option>
            <option value="python">Curso de Python</option>
          </select>
          @if (registroForm.get('campoActividad')?.invalid && registroForm.get('campoActividad')?.touched) {
            <span class="mensaje-error">Debe seleccionar una actividad de la lista.</span>
          }
        </div>

        <div class="grupo-entrada">
          <label for="jornadaSelect">Jornada de Estudio:</label>
          <select id="jornadaSelect" formControlName="campoJornada" class="input-seleccion">
            <option value="" disabled selected>Seleccione su jornada</option>
            <option value="diurna">Jornada Diurna</option>
            <option value="vespertina">Jornada Vespertina</option>
          </select>
          @if (registroForm.get('campoJornada')?.invalid && registroForm.get('campoJornada')?.touched) {
            <span class="mensaje-error">Debe indicar su jornada de estudio.</span>
          }
        </div>

        <div class="grupo-entrada">
          <label for="notas">Comentarios adicionales (opcional):</label>
          <textarea id="notas" formControlName="campoComentarios" class="input-area" rows="4"></textarea>
        </div>

        <button type="submit" class="boton-enviar">Confirmar Registro</button>

      </form>
    </section>
  `
})
export class Inscripcion {
  registroForm = new FormGroup({
    campoNombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    campoApellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    campoCorreo: new FormControl('', [Validators.required, Validators.email]),
    campoCarrera: new FormControl('', [Validators.required]),
    campoActividad: new FormControl('', [Validators.required]),
    campoJornada: new FormControl('', [Validators.required]),
    campoComentarios: new FormControl('')
  });

  procesarFormulario() {
    if (this.registroForm.valid) {
      alert('Operación exitosa: Su registro ha sido ingresado correctamente en el sistema.');
      console.log('Información del registro:', this.registroForm.value);
      this.registroForm.reset();
    } else {
      alert('Error en el formulario: Por favor, verifique y corrija los campos marcados en rojo.');
      this.registroForm.markAllAsTouched();
    }
  }
}