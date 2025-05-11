import { Routes } from '@angular/router';
import { RoomListComponent } from './feature/room/room-list/room-list.component';
import { NavbarComponent } from './feature/nav/navbar/navbar.component';
export const routes: Routes = [
  { path: '', redirectTo: '/room', pathMatch: 'full' },
  { path: 'room', component: RoomListComponent },
  { path: 'navbar', component: NavbarComponent },
];