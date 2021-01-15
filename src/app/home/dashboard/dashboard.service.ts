import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getUserGames(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>('http://localhost:5000/api/usergames/?userId=5ca639bc1dfa585334095c99&currentYear=true');
  }
}
