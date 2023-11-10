// // property.service.ts
// import { HttpClient } from '@angular/common/http';
// import { Injectable, InjectionToken } from '@angular/core';

// export const PROPERTY_SERVICE_TOKEN = new InjectionToken('PropertyService');

// @Injectable({
//   providedIn:'root'
// })
// export class PropertyService {
//   getProperties: any;

// }

// // properties.component.ts
// import { Component, Inject } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Property } from 'src/app/models/property.model';

// @Component({
//   selector: 'app-properties',
//   templateUrl: './properties.component.html',
//   styleUrls: ['./properties.component.css']
// })
// export class PropertiesComponent {
//   private propertiesUrl = 'assets/properties.json';

//   constructor(private http: HttpClient) {}

//   getProperties(): Observable<Property[]> {
//     return this.http.get<Property[]>(this.propertiesUrl);
//   }
// }
