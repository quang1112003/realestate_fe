// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { Properties } from '../models/properties.model';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private apiUrl = 'localhost:8080/api/v1/properties'; // Thay URL_API_CUA_BAN bằng đường dẫn API của bạn

  constructor(private http: HttpClient) {}

  getProperties(): Observable<Properties[]> {
    return this.http.get<Properties[]>(this.apiUrl);
  }
}