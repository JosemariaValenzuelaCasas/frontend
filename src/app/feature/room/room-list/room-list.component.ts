import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],

})
export class RoomListComponent {
  displayedColumns: string[] = ['idRoom', 'roomType', 'capacity', 'floor', 'description', 'dateMaintenance', 'roomStatus']; 
  dataSource = new MatTableDataSource([
    { idRoom: 1, roomType: 'Matrimonial', capacity: 2, floor: 2, description: 'Habitacion pequeña', dateMaintenance: '2025-05-04', roomStatus: 'Disponible' },
    { idRoom: 2, roomType: 'Familiar', capacity: 5, floor: 1, description: 'Habitacion Grande', dateMaintenance: '2025-04-04', roomStatus: 'Ocupada' }
  ]);
}