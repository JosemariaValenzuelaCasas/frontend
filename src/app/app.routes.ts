import { Routes } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserFormComponent } from './feature/user/user-form/user-form.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { RoomListComponent } from './feature/room/room-list/room-list.component';
import { NavbarComponent } from './feature/nav/navbar/navbar.component';
export const routes: Routes = [
  { path: '', redirectTo: '/room', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'room', component: RoomListComponent },
  { path: 'navbar', component: NavbarComponent },
];