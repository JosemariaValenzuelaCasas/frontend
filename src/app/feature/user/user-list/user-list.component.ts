import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/interfaces/user';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { RoleNamePipe } from '../../../role-name.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink,NgIf,RoleNamePipe,MatFormFieldModule,MatInputModule,MatSortModule,MatPaginatorModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['username', 'password', 'email', 'role','status','actions'];
  errorMessage: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.errorMessage = null;
        console.log('Users loaded:', data);
      },
      error: (error) => {
        this.errorMessage = `Error loading users: ${error.message}`;
        console.error('Error loading users:', error);
      }
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        const user = this.users.find(u => u.id === id);
        if (user) {
          user.status = 'I'; 
        }
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = `Error deleting user: ${error.message}`;
        console.error('Error deleting user:', error);
      }
    });
  }

  restoreUser(id: number): void {
    this.userService.restoreUser(id).subscribe({
      next: () => {
        const user = this.users.find(u => u.id === id);
        if (user) user.status = 'A';
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = `Error deleting user: ${error.message}`;
        console.error('Error deleting user:', error);
      }
    });
  }
}