import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propertiesdetails',
  templateUrl: './propertiesdetails.component.html',
  styleUrls: ['./propertiesdetails.component.css']
})
export class PropertiesdetailsComponent implements OnInit {
  property: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const id = +params['id'];
      if (!isNaN(id)) {
        // Fetch the property details by ID from your API or data source
        this.http.get(`http://localhost:3000/properties/${id}`).subscribe((data) => {
          this.property = data;
        });
      }
    });
  }
}
