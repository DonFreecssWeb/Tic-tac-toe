import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cambiar-nombre',
  standalone: true,
  imports: [],
  templateUrl: './cambiar-nombre.component.html',
  styleUrl: './cambiar-nombre.component.scss'
})
export class CambiarNombreComponent {
  usuarioService  = inject(UsuarioService);
  cambiarNombre(nombre:string){
    this.usuarioService.nombre.set(nombre)
  }
}
