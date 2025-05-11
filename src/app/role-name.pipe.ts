import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleName',
  standalone: true
})
export class RoleNamePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    switch (value) {
      case 'a': return 'Administrador';
      case 'u': return 'Usuario';
      case 'g': return 'Invitado';
      default: return 'Desconocido';
    }
  }
}
