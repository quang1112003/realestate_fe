import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Properties } from 'src/app/models/properties.model';
import { Property } from 'src/app/models/property.model';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})

export class PropertiesComponent implements OnInit{
  properties: Properties[] = [];

  constructor(private propertyService: PropertiesService) {}

  ngOnInit() {
    this.propertyService.getProperties().subscribe((data) => {
      this.properties = data;
    });
  }
  // searchQuery: string = '';
  // properties: Property[] = [];
  // filteredProperties: Property[] = [];
  // p: number = 1;
  // itemsPerPage: number = 6; // Number of items to display per page
  // searchLocation: any;
  // searchPropertyType: string = '0';
  // searchProvince: string = '';
  // searchDistrict: string = '';
  // searchWard: string = '';
  // minArea: number = 0;
  // maxArea: number = 1000;
  // minPrice: number = 0;
  // maxPrice: number = 1000;
  // provinces: any[] = [];
  // districts: any[] = [];
  // wards: any[] = [];
  // originalProperties: Property[] = []; // Declare originalProperties


  // constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.http.get<Property[]>('http://localhost:3000/properties').subscribe(data => {
//       this.properties = data;
//       this.filteredProperties = [...this.properties];
//       this.originalProperties = [...this.properties]; // Make a copy for resetting

//     });

//     this.http.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1').subscribe(
//   (data: any) => {
//     this.provinces = data.data.data;
//   },
//   (error) => {
//     console.error('Error fetching provinces:', error);
//   }
// );
//   }

//   onProvinceChange() {
//     this.http.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${this.searchProvince}&limit=-1`).subscribe((data: any) => {
//       this.districts = data.data.data;
//     });
//   }
//   onWardChange() {
//     this.fetchWards(this.searchWard);
//   }
  
//   onDistrictChange() {
//     this.fetchWards(this.searchDistrict);
//   }
  
//   fetchWards(districtsID: string) {
//     this.http.get(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${this.searchDistrict}&limit=-1`)
//     .subscribe(
//       (data: any) => {
//         this.wards = data.data.data;
//       },
//       (error) => {
//         console.error('Error fetching wards:', error);
//       }
//     );
//   }

  // searchProperties() {
  //   // Get the search query from the input field
  //   const searchQuery = this.searchLocation.toLowerCase().trim();
  
  //   // Filter properties based on the search query
  //   this.filteredProperties = this.properties.filter(property => {
  //     // Combine all property fields that you want to search within
  //     const propertyInfo = `${property.title} ${property.description} ${property.province} ${property.district} ${property.ward}`.toLowerCase();
  
  //     // Check if the property information includes the search query
  //     return propertyInfo.includes(searchQuery);
  //   });
  // }
  
  // search() {
  //   if (this.searchQuery.trim() === '') {
  //     // If the search query is empty, reset the properties to the original list
  //     this.properties = [...this.originalProperties];
  //   } else {
  //     // Filter properties based on the searchQuery
  //     this.properties = this.originalProperties.filter(res => {
  //       return res.province.toLowerCase().includes(this.searchQuery.toLowerCase());
  //     });
  //   }
  // }
  
  
  
  // pageChanged(event: any): void {
  //   this.p = event;
  // }
  // filterProperties() {
  //   this.filteredProperties = this.properties.filter((property) => {
  //     // Filter by property type
  //     if (this.searchPropertyType !== '0' && property.tag !== this.searchPropertyType) {
  //       return false;
  //     }
  //     // Filter by district
  //     if (this.searchDistrict && property.district !== this.searchDistrict) {
  //       return false;
  //     }
  //     // Filter by ward
  //     if (this.searchWard && property.ward !== this.searchWard) {
  //       return false;
  //     }
  //     // Filter by province
  //     if (this.searchProvince && property.province !== this.searchProvince) {
  //       return false;
  //     }
  //     return true; // Include property in results
  //   });
  // }
}
