import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../../core/interfaces/room'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'http://localhost:8080/v1/api/room';

  constructor(private http: HttpClient) {}

  
  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl);
  }

  
  getById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  
  getByStatus(status: string): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/status/${status}`);
  }

  
  save(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.baseUrl}/save`, room);
  }

  
  update(room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.baseUrl}/update`, room);
  }

  
  deleteLogical(id: number): Observable<Room> {
    return this.http.patch<Room>(`${this.baseUrl}/${id}/delete`, {});
  }

  
  restoreLogical(id: number): Observable<Room> {
    return this.http.patch<Room>(`${this.baseUrl}/${id}/restore`, {});
  }
}
