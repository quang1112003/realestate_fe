import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiGetRoles  = `${environment.apiBaseUrl}/roles`;

  constructor(private http: HttpClient) { }
  getRoles():Observable<any> {
    return this.http.get<any[]>(this.apiGetRoles);
  }
}
